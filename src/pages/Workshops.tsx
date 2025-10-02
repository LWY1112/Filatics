import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { workshopsData } from '../data/workshopsData';
import { getIcon } from '../utils/iconMapper';

const Workshops = () => {
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
            {workshopsData.hero.title.split(' ').slice(0, 1).join(' ')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}{workshopsData.hero.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {workshopsData.hero.subtitle}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{workshopsData.upcomingWorkshops.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {workshopsData.upcomingWorkshops.subtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshopsData.upcomingWorkshops.workshops.map((workshop, index) => {
              const Calendar = getIcon('Calendar');
              const Clock = getIcon('Clock');
              const MapPin = getIcon('MapPin');
              const Users = getIcon('Users');
              const ExternalLink = getIcon('ExternalLink');
              
              return (
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
              );
            })}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{workshopsData.workshopBenefits.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {workshopsData.workshopBenefits.subtitle}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {workshopsData.workshopBenefits.benefits.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icon as any);
              return (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center w-full sm:w-80 max-w-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{workshopsData.pastWorkshops.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {workshopsData.pastWorkshops.subtitle}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {workshopsData.pastWorkshops.workshops.map((workshop, index) => {
              const Calendar = getIcon('Calendar');
              const Users = getIcon('Users');
              const Star = getIcon('Star');
              
              return (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full sm:w-96 max-w-md"
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
              );
            })}
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
            {workshopsData.callToAction.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {workshopsData.callToAction.subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {workshopsData.callToAction.buttons.map((button, index) => {
              const IconComponent = button.icon ? getIcon(button.icon as any) : null;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.link.startsWith('/') ? (
                    <Link
                      to={button.link}
                      className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl ${
                        button.type === 'primary' 
                          ? 'bg-white text-emerald-600 hover:bg-gray-50' 
                          : 'border-2 border-white text-white hover:bg-white hover:text-emerald-600'
                      }`}
                    >
                      {button.text}
                      {IconComponent && <IconComponent className="ml-2 h-5 w-5" />}
                    </Link>
                  ) : (
                    <a
                      href={button.link}
                      className={`px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl ${
                        button.type === 'primary' 
                          ? 'bg-white text-emerald-600 hover:bg-gray-50' 
                          : 'border-2 border-white text-white hover:bg-white hover:text-emerald-600'
                      }`}
                    >
                      {button.text}
                      {IconComponent && <IconComponent className="ml-2 h-5 w-5" />}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;