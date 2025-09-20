import React from 'react';
import { Target, Zap, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to deliver exceptional results.',
      icon: Zap
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with our clients to understand and exceed their expectations.',
      icon: Users
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in every project we undertake.',
      icon: Award
    },
    {
      title: 'Agile Delivery',
      description: 'Fast, efficient project delivery with flexible methodologies and transparent communication.',
      icon: CheckCircle
    }
  ];

  const journey = [
    {
      year: '2018',
      title: 'Vextronic Founded',
      description: 'Started with a vision to transform digital services'
    },
    {
      year: '2020',
      title: '50+ Projects',
      description: 'Reached our first major milestone in project delivery'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched AI and machine learning services'
    },
    {
      year: '2023',
      title: '100+ Clients',
      description: 'Expanded our client base across multiple industries'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Pioneering IoT, AR/VR, and sustainable solutions'
    },
    {
      year: '2025',
      title: 'Future Services',
      description: 'Developing next-generation digital solutions'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in digital transformation and strategic business development.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      description: 'Technical architect specializing in scalable solutions and emerging technologies.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Design',
      description: 'Creative director with expertise in user experience design and brand development.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Elena Petrov',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring the highest level of protection for our clients.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const features = [
    'Comprehensive service portfolio covering all digital needs',
    'Expert team with deep industry knowledge',
    'Cutting-edge technologies and industry best practices',
    'Agile methodologies for faster project delivery',
    'Dedicated support and long-term partnerships',
    'Transparent pricing and clear project timelines'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                About <span className="text-emerald-600">Vextronic</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                We are a forward-thinking digital services company that transforms businesses through innovative technology solutions. Our comprehensive approach combines cutting-edge development, creative design, and strategic business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium">
                  Learn Our Story
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 dark:bg-gray-800 p-8 rounded-2xl transition-colors duration-300">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages in today's rapidly evolving technological landscape.
              </p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-700 p-8 rounded-2xl text-white transition-colors duration-300">
              <Zap className="h-12 w-12 text-white mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 dark:text-gray-200 leading-relaxed transition-colors duration-300">
                To be the world's leading digital transformation partner, recognized for our innovation, excellence, and ability to turn ambitious ideas into successful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              These principles guide everything we do and help us maintain our leadership position in the digital services space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-900 dark:bg-gray-800 text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              From a small startup to a leading digital service company, here's how we've grown and evolved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((milestone, index) => (
              <div key={index} className="bg-gray-800 dark:bg-gray-700 p-6 rounded-2xl transition-colors duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-gray-400 dark:text-gray-300 transition-colors duration-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Experienced professionals leading innovation and driving excellence in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Why Choose Vextronic?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                We combine technical expertise with creative innovation to deliver solutions that not only meet but exceed your business goals.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium flex items-center gap-2">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Why choose us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Join hundreds of satisfied clients who have accelerated their growth with our comprehensive digital services and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Get Started Today
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;