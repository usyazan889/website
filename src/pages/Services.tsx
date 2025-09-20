import React from 'react';
import { Code, Palette, Zap, Shield, TrendingUp, Server, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'E-commerce',
    'API Development',
    'Database Design',
    'Cloud Services',
    'DevOps'
  ];

  const services = [
    {
      title: 'Custom Website Development',
      description: 'Professional, responsive websites built with modern technologies and optimized for performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'TypeScript'],
      category: 'Web Development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Flutter', 'Swift'],
      category: 'Mobile Development'
    },
    {
      title: 'UI/UX Design Services',
      description: 'User-centered design approach creating intuitive interfaces and exceptional user experiences.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      category: 'Design'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and customer analytics.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Shopify', 'WooCommerce', 'Stripe'],
      category: 'E-commerce'
    },
    {
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive marketing campaigns including SEO, social media, and content marketing strategies.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Google Analytics', 'SEMrush', 'HubSpot'],
      category: 'Marketing'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with automated deployment, monitoring, and disaster recovery.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'Azure', 'Docker'],
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment including penetration testing and vulnerability analysis.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['OWASP', 'Nessus', 'Metasploit'],
      category: 'Security'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions including chatbots, predictive analytics, and automation systems.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI'],
      category: 'AI/ML'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Business intelligence dashboards with real-time data visualization and reporting capabilities.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Tableau', 'Power BI', 'Python'],
      category: 'Analytics'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development workflows with CI/CD pipelines and infrastructure automation.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Jenkins', 'Kubernetes', 'Terraform'],
      category: 'DevOps'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise applications with complex integrations and advanced security features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', '.NET', 'Oracle'],
      category: 'Enterprise'
    },
    {
      title: 'Business Process Automation',
      description: 'Workflow automation solutions to streamline operations and improve efficiency across departments.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Zapier', 'Microsoft Flow', 'Custom APIs'],
      category: 'Automation'
    }
  ];

  const mainCategories = [
    {
      title: 'Programming & Development',
      description: 'Custom websites, mobile apps, business systems, and SaaS solutions built with cutting-edge technology.',
      icon: Code,
      color: 'bg-blue-100 hover:bg-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Design & Creative',
      description: 'Stunning UI/UX design, branding, video production, and graphic design that captivates your audience.',
      icon: Palette,
      color: 'bg-gray-800 hover:bg-gray-700',
      iconColor: 'text-white',
      textColor: 'text-white'
    },
    {
      title: 'AI & Data',
      description: 'AI integration, data analytics, machine learning solutions to transform your business intelligence.',
      icon: Zap,
      color: 'bg-blue-100 hover:bg-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including penetration testing, server protection, and encryption.',
      icon: Shield,
      color: 'bg-gray-800 hover:bg-gray-700',
      iconColor: 'text-white',
      textColor: 'text-white'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO optimization, targeted advertising, social media management, and brand development strategies.',
      icon: TrendingUp,
      color: 'bg-blue-100 hover:bg-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Hosting & Infrastructure',
      description: 'Reliable hosting solutions, server setup, business email, and infrastructure management.',
      icon: Server,
      color: 'bg-gray-800 hover:bg-gray-700',
      iconColor: 'text-white',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our <span className="text-emerald-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300">
              Explore our collection of digital services and technologies. Each service represents our commitment to excellence and innovation in the digital landscape.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">Service Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-200 cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-emerald-600">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                      View Project <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200">
                      Contact Expert
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Details */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Our Service Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive digital solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer ${category.color}`}
                >
                  <IconComponent className={`h-12 w-12 ${category.iconColor} ${category.textColor === 'text-white' ? '' : 'dark:text-white'} mb-6 transition-colors duration-300`} />
                  <h3 className={`text-xl font-bold mb-4 ${category.textColor || 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${category.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'} transition-colors duration-300`}>
                    {category.description}
                  </p>
                  <button className={`flex items-center gap-2 font-medium transition-colors duration-200 ${
                    category.textColor === 'text-white' 
                      ? 'text-emerald-400 hover:text-emerald-300' 
                      : 'text-emerald-600 hover:text-emerald-700'
                  }`}>
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Have a unique project in mind? Our expert team can create tailored solutions that perfectly fit your business requirements and goals.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;