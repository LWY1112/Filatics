import { Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle, Camera, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Workshops = () => {
  const upcomingWorkshops = [
    {
      id: 1,
      title: '3D Printing with Recycled Filament',
      date: '2024-03-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Filatics Lab, KL',
      capacity: '15 participants',
      description: 'Learn how recycled plastic is transformed into filament and try your hand at 3D printing sustainable creations.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-1'
    },
    {
      id: 2,
      title: 'Sustainability in Action',
      date: '2024-03-22',
      time: '10:00 AM - 1:00 PM',
      location: 'Community Center, KL',
      capacity: '25 participants',
      description: 'A hands-on workshop on recycling practices and building eco-friendly habits for sustainable living.',
      status: 'filling-fast',
      registrationUrl: 'https://forms.google.com/your-workshop-form-2'
    },
    {
      id: 3,
      title: 'Plastic Waste to Innovation',
      date: '2024-04-05',
      time: '9:00 AM - 12:00 PM',
      location: 'University Lab Building',
      capacity: '20 participants',
      description: 'Discover the complete process of converting plastic waste into valuable resources and innovative products.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-3'
    },
    {
      id: 4,
      title: 'Community Recycling Drive',
      date: '2024-04-12',
      time: '8:00 AM - 11:00 AM',
      location: 'Various Locations, KL',
      capacity: '50 participants',
      description: 'Join our community-wide recycling initiative and learn how to organize effective recycling drives.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-4'
    }
  ];

  const pastWorkshops = [
    {
      title: 'Eco-Innovation Challenge',
      date: '2024-02-18',
      participants: 35,
      feedback: '4.9/5',
      description: 'Students competed to create innovative solutions using recycled materials',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Green Technology Workshop',
      date: '2024-02-11',
      participants: 28,
      feedback: '4.8/5',
      description: 'Hands-on experience with sustainable technology and green innovations',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Community Awareness Drive',
      date: '2024-01-28',
      participants: 45,
      feedback: '4.7/5',
      description: 'Educational session on plastic pollution and community-based solutions',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Sustainable Living Workshop',
      date: '2024-01-14',
      participants: 32,
      feedback: '4.8/5',
      description: 'Practical tips and strategies for adopting sustainable lifestyle practices',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-emerald-100 text-emerald-800';
      case 'filling-fast':
        return 'bg-orange-100 text-orange-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'filling-fast':
        return 'Filling Fast';
      case 'full':
        return 'Full';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Educational 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}Workshops
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our hands-on workshops to learn about sustainable practices, recycling technologies, 
            and how you can make a positive impact in your community.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register now for our upcoming educational sessions and hands-on learning experiences
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div 
                key={workshop.id} 
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{workshop.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(workshop.status)}`}>
                    {getStatusText(workshop.status)}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-emerald-600" />
                    <span>{new Date(workshop.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-emerald-600" />
                    <span>{workshop.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-emerald-600" />
                    <span>{workshop.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-emerald-600" />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                
                <motion.a
                  href={workshop.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our workshops provide valuable skills, knowledge, and connections in the sustainability field
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
                title: 'Practical Skills',
                description: 'Learn hands-on techniques you can immediately apply in your daily life and community projects.'
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Network Building',
                description: 'Connect with like-minded individuals, professionals, and potential collaborators in sustainability.'
              },
              {
                icon: <ExternalLink className="h-8 w-8 text-emerald-600" />,
                title: 'Resources & Support',
                description: 'Access ongoing resources, mentorship, and support from our team and community.'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-4 rounded-full w-fit mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase photos & testimonials from previous events and the impact of our educational programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWorkshops.map((workshop, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{workshop.feedback}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(workshop.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{workshop.participants} participants</span>
                    </div>
                  </div>
                </div>
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
            Ready to Learn and Grow?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our next workshop and become part of the sustainable technology movement
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://forms.google.com/your-general-workshop-form"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Workshops
              <ExternalLink className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;