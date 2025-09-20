import React from 'react';
import { Square, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';

const Footer = () => {
  const { siteSettings } = useAdmin();

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Square className="h-8 w-8" style={{ color: siteSettings.primaryColor }} />
              <span className="text-xl font-bold">{siteSettings.siteName}</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
              {siteSettings.aboutText}
            </p>
            <div className="flex space-x-4">
              <Facebook 
                className="h-5 w-5 text-gray-400 cursor-pointer transition-colors duration-200" 
                style={{ ':hover': { color: siteSettings.primaryColor } }}
              />
              <Twitter 
                className="h-5 w-5 text-gray-400 cursor-pointer transition-colors duration-200"
                style={{ ':hover': { color: siteSettings.primaryColor } }}
              />
              <Linkedin 
                className="h-5 w-5 text-gray-400 cursor-pointer transition-colors duration-200"
                style={{ ':hover': { color: siteSettings.primaryColor } }}
              />
              <Instagram 
                className="h-5 w-5 text-gray-400 cursor-pointer transition-colors duration-200"
                style={{ ':hover': { color: siteSettings.primaryColor } }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Programming & Development</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Design & Creative</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>AI & Data</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Cybersecurity</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Digital Marketing</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Hosting & Infrastructure</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Future Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li><Link to="/about" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>About Us</Link></li>
              <li><Link to="/portfolio" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Portfolio</Link></li>
              <li><Link to="/services" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Services</Link></li>
              <li><Link to="/contact" className="transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li>📧 {siteSettings.contactEmail}</li>
              <li>📞 {siteSettings.contactPhone}</li>
              <li>📍 {siteSettings.contactAddress}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
            © 2024 {siteSettings.siteName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 dark:text-gray-300 text-sm transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 dark:text-gray-300 text-sm transition-colors duration-200" style={{ ':hover': { color: siteSettings.primaryColor } }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;