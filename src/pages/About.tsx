import { Target, Eye, Heart, Users, Award, TrendingUp, Trophy, Star, Shield, Lightbulb, Globe } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Delivering safe, reliable filament that meets the highest standards for 3D printing applications.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technology to solve global environmental issues and create sustainable solutions.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Impact Focused',
      description: 'Measuring our success through tangible environmental change and positive community impact.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Protecting the planet for future generations through responsible recycling and green innovation.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building partnerships that inspire action and create lasting change in our communities.'
    }
  ];

  const stats = [
    { value: 10000, label: 'Bottles Collected', suffix: '+' },
    { value: 20, label: 'Workshops Hosted', suffix: '+' },
    { value: 500, label: 'Community Members', suffix: '+' },
    { value: 95, label: 'Recycling Efficiency', suffix: '%' }
  ];

  const awards = [
    {
      icon: <Trophy className="h-12 w-12" />,
      title: '2024 Green Innovation Award',
      description: 'Recognized for pioneering solutions in recycling technology and sustainable innovation.',
      year: '2024'
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: 'Best Student-Led Startup 2023',
      description: 'Awarded by leading institutions for outstanding entrepreneurship and environmental impact.',
      year: '2023'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Eco Impact Recognition',
      description: 'Honored for positive environmental contribution and community engagement in Southeast Asia.',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {' '}Filatics
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Filatics began as a student-led initiative with a single purpose: to fight plastic waste. 
                What started as a small idea quickly grew into a mission — turning discarded plastic bottles 
                into innovative solutions for the future.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working on recycling project"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why It Matters</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-red-800 mb-4">
                  30,590 tonnes of plastic bottle waste are generated in Kuala Lumpur every year.
                </p>
                <p className="text-xl text-red-700 mb-4">
                  Malaysia's recycling rate is only 32%, with 81% of recycled plastic ending up in landfills (WWF Malaysia, 2022).
                </p>
                <p className="text-lg text-red-600">
                  Without urgent change, plastic waste will continue to harm ecosystems, human health, and our climate.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These statistics represent the positive change we've created together with our community
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-lg w-fit mx-auto lg:mx-0 mb-6">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where waste is no longer wasted, but transformed into resources for innovation. 
                We envision a future where every piece of plastic waste becomes a building block for 
                sustainable technology and creative solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-4 rounded-lg w-fit mx-auto lg:mx-0 mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create sustainable 3D printing filament from plastic waste while raising awareness 
                and empowering communities to recycle. We are committed to reducing plastic pollution 
                through innovative recycling solutions and creating economic opportunities in green technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every aspect of our work and shape how we approach challenges and opportunities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainability and innovation has been recognized by leading organizations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-emerald-600 mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {award.icon}
                </motion.div>
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit mx-auto">
                  {award.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-gray-600 leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Be part of the solution. Help us create a more sustainable future for generations to come.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved Today
            </motion.a>
            <motion.a
              href="/workshops"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Attend a Workshop
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;