import React from 'react';
import { ArrowRight, Code, Palette, Zap, Shield, TrendingUp, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';

const Home = () => {
  const { siteSettings } = useAdmin();

  const serviceCards = [
    {
      title: 'React',
      description: 'Building dynamic, interactive web applications and cutting-edge development practices.',
      icon: Code,
      color: 'bg-blue-100 text-blue-600',
      buttonText: 'Learn More'
    },
    {
      title: 'Revitalize',
      description: 'Modernize your business infrastructure with our comprehensive digital transformation services.',
      icon: Zap,
      color: 'bg-gray-800 text-white',
      buttonText: 'Get Started',
      dark: true
    },
    {
      title: 'Relaunch',
      description: 'Launch your business to new heights with our innovative solutions and strategic digital services that drive real results.',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600',
      buttonText: 'Check Our Services'
    }
  ];

  const categories = [
    {
      title: 'Programming & Development',
      description: 'Custom websites, mobile apps, business systems, and SaaS solutions built with cutting-edge technology.',
      icon: Code,
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Design & Creative',
      description: 'Stunning UI/UX design, branding, video production, and graphic design that captivates your audience.',
      icon: Palette,
      color: 'bg-gray-800',
      textColor: 'text-white',
      dark: true
    },
    {
      title: 'AI & Data',
      description: 'AI integration, data analytics, machine learning solutions to transform your business intelligence.',
      icon: Zap,
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including penetration testing, server protection, and encryption.',
      icon: Shield,
      color: 'bg-gray-800',
      textColor: 'text-white',
      dark: true
    },
    {
      title: 'Digital Marketing',
      description: 'SEO optimization, targeted advertising, social media management, and brand development strategies.',
      icon: TrendingUp,
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Hosting & Infrastructure',
      description: 'Reliable hosting solutions, server setup, business email, and infrastructure management.',
      icon: Server,
      color: 'bg-gray-800',
      textColor: 'text-white',
      dark: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '7', label: 'Service Categories' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                {siteSettings.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
                <span style={{ color: siteSettings.primaryColor }}>
                  {siteSettings.heroTitle.split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                {siteSettings.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="text-white px-8 py-3 rounded-lg transition-colors duration-200 text-center font-medium"
                  style={{ 
                    backgroundColor: siteSettings.primaryColor,
                    ':hover': { backgroundColor: `${siteSettings.primaryColor}dd` }
                  }}
                >
                  Explore Services
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 text-center font-medium"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {serviceCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-transform duration-200 hover:scale-105 ${
                      card.dark ? 'bg-gray-800 dark:bg-gray-700 text-white' : card.color + ' dark:bg-gray-800 dark:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold transition-colors duration-300">{card.title}</h3>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <p className={`text-sm mb-4 transition-colors duration-300 ${card.dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                      {card.description}
                    </p>
                    <button className={`text-sm font-medium flex items-center gap-2 ${
                      card.dark ? 'hover:opacity-80' : 'hover:opacity-80'
                    } transition-colors duration-200`}>
                    <button 
                      className="text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-colors duration-200"
                      style={{ color: siteSettings.primaryColor }}
                    >
                      {card.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 dark:bg-gray-800 text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: siteSettings.primaryColor }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 dark:text-gray-300 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Our Service Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive digital solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-transform duration-200 hover:scale-105 ${
                    category.dark ? 'bg-gray-800 dark:bg-gray-700 text-white' : category.color + ' dark:bg-gray-800'
                  }`}
                >
                  <IconComponent className={`h-12 w-12 ${category.textColor} ${category.dark ? '' : 'dark:text-white'} mb-6 transition-colors duration-300`} />
                  <h3 className={`text-xl font-bold mb-4 ${category.textColor}`}>
                    {category.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${
                    category.dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {category.description}
                  </p>
                  <button className={`flex items-center gap-2 font-medium ${
                    category.dark ? 'hover:opacity-80' : 'hover:opacity-80'
                  } transition-colors duration-200`}>
                  <button 
                    className="flex items-center gap-2 font-medium hover:opacity-80 transition-colors duration-200"
                    style={{ color: siteSettings.primaryColor }}
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Join hundreds of satisfied clients who have accelerated their growth with our comprehensive digital services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
              style={{ 
                backgroundColor: siteSettings.secondaryColor,
                ':hover': { backgroundColor: `${siteSettings.secondaryColor}dd` }
              }}
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
              style={{ 
                ':hover': { 
                  borderColor: siteSettings.primaryColor,
                  color: siteSettings.primaryColor
                }
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;