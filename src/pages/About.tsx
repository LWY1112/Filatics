import AnimatedCounter from '../components/AnimatedCounter';
import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import { getIcon } from '../utils/iconMapper';

const About = () => {
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
                {aboutData.hero.title.split(' ').slice(0, 1).join(' ')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {' '}{aboutData.hero.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {aboutData.hero.subtitle}
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={aboutData.hero.heroImage}
                alt={aboutData.hero.heroImageAlt}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{aboutData.whyItMatters.title}</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 max-w-4xl mx-auto">
              {aboutData.whyItMatters.statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className={`text-xl ${index === 0 ? 'font-bold text-red-800 mb-4' : index === 1 ? 'text-red-700 mb-4' : 'text-red-600'}`}>
                    {stat}
                  </p>
                </motion.div>
              ))}
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
          
          <div className="flex flex-wrap justify-center gap-8">
            {aboutData.impactStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-lg w-full sm:w-48 max-w-xs"
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
                {(() => {
                  const IconComponent = getIcon(aboutData.visionMission.vision.icon as any);
                  return <IconComponent className="h-10 w-10" />;
                })()}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{aboutData.visionMission.vision.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.visionMission.vision.description}
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
                {(() => {
                  const IconComponent = getIcon(aboutData.visionMission.mission.icon as any);
                  return <IconComponent className="h-10 w-10" />;
                })()}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{aboutData.visionMission.mission.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.visionMission.mission.description}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.coreValues.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutData.coreValues.subtitle}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {aboutData.coreValues.values.map((value, index) => {
              const IconComponent = getIcon(value.icon as any);
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full sm:w-80 max-w-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg w-fit mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.awards.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutData.awards.subtitle}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {aboutData.awards.awards.map((award, index) => {
              const IconComponent = getIcon(award.icon as any);
              return (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 w-full sm:w-80 max-w-sm"
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
                    <IconComponent className="h-12 w-12" />
                  </motion.div>
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit mx-auto">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{award.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{award.description}</p>
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
            {aboutData.callToAction.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {aboutData.callToAction.subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {aboutData.callToAction.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.link}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  button.type === 'primary' 
                    ? 'bg-white text-emerald-600 hover:bg-gray-50' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-emerald-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;