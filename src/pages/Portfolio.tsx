import React from 'react';
import { ExternalLink, Calendar, Tag, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const stats = [
    { number: '8+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '7', label: 'Service Areas' },
    { number: '99%', label: 'Success Rate' }
  ];

  const projects = [
    {
      title: 'Smart Home Automation System',
      category: 'IoT Development',
      description: 'Developed a comprehensive IoT-based smart home solution including mobile app, sensors, and automated control systems.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'IoT'],
      date: '2024',
      status: 'Completed',
      client: 'Smart Living'
    },
    {
      title: 'AI-Powered Customer Support Chatbot',
      category: 'AI Development',
      description: 'Implemented an intelligent chatbot solution for a major retailer with natural language processing capabilities.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      date: '2024',
      status: 'Completed',
      client: 'RetailCorp'
    },
    {
      title: 'Multi-Channel Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Designed and executed a comprehensive digital marketing strategy across multiple platforms and channels.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Google Ads', 'Facebook', 'Analytics'],
      date: '2024',
      status: 'Ongoing',
      client: 'BrandMax'
    },
    {
      title: 'Fitness Tracker Mobile Application',
      category: 'Mobile Development',
      description: 'Built a comprehensive fitness tracking app with social features, workout plans, and progress analytics.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Google Fit API'],
      date: '2024',
      status: 'Completed',
      client: 'FitTracker'
    },
    {
      title: 'E-commerce Platform for Artisanal Goods',
      category: 'E-commerce',
      description: 'Developed a modern, scalable e-commerce solution for local artisans with payment processing and inventory management.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Stripe', 'PostgreSQL'],
      date: '2023',
      status: 'Completed',
      client: 'ArtisanHub'
    },
    {
      title: 'Comprehensive Penetration Testing for FinTech',
      category: 'Cybersecurity',
      description: 'Conducted thorough penetration testing and security assessment for a financial technology startup.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Kali Linux', 'OWASP', 'Metasploit'],
      date: '2023',
      status: 'Completed',
      client: 'SecureFinance'
    },
    {
      title: 'SaaS Dashboard UI/UX Redesign',
      category: 'UI/UX Design',
      description: 'Completely redesigned the user interface and experience for a software-as-a-service analytics platform.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Figma', 'React', 'User Research'],
      date: '2023',
      status: 'Completed',
      client: 'DataViz Pro'
    },
    {
      title: 'Cloud Infrastructure Migration Startup',
      category: 'Cloud Services',
      description: 'Migrated a startup\'s entire infrastructure to cloud with automated deployment and disaster recovery setup.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      date: '2023',
      status: 'Completed',
      client: 'CloudTech'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Java', 'Docker', 'MongoDB',
    'TypeScript', 'Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our <span className="text-emerald-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Explore our collection of successful projects that showcase our expertise across various industries and technologies. Each project represents our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-emerald-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                    <span>•</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                      View Project <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Technologies We Master</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              We work with cutting-edge technologies to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center hover:bg-emerald-50 dark:hover:bg-emerald-900 hover:text-emerald-600 transition-colors duration-200 cursor-pointer"
              >
                <div className="text-2xl mb-2">⚡</div>
                <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Let's create something amazing together. Let's discuss something amazing together that showcases your vision and drives your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium flex items-center gap-2 justify-center">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;