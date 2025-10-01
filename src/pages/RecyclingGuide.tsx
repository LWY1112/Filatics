import { motion } from "framer-motion";
import { recyclingData } from '../data/recyclingData';
import { getIcon } from '../utils/iconMapper';

const RecyclingGuide: React.FC = () => {
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
            {recyclingData.hero.title.split(' ').slice(0, 3).join(' ')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}{recyclingData.hero.title.split(' ').slice(3).join(' ')}
            </span>
          </motion.h1>

          <motion.div
            className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl font-bold text-red-800 mb-4">{recyclingData.hero.didYouKnow.title}</p>
            {recyclingData.hero.didYouKnow.facts.map((fact, index) => (
              <p key={index} className="text-lg text-red-700 mb-2">
                {fact}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Recycle Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{recyclingData.howToRecycle.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {recyclingData.howToRecycle.subtitle}
            </p>
          </motion.div>

          {/* MOBILE: Natural sequence 1→2→3→4 */}
          <div className="md:hidden grid grid-cols-1 gap-12">
            {recyclingData.howToRecycle.steps.map((step, index) => {
              const IconComponent = getIcon(step.icon as any);
              const CheckCircle = getIcon('CheckCircle');
              const ArrowRight = getIcon('ArrowRight');
              const isLast = index === recyclingData.howToRecycle.steps.length - 1;
              
              return (
                <motion.div 
                  key={`m-${index}`} 
                  className="relative" 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors h-full"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{`${index + 1}. ${step.title}`}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className="space-y-1">
                          {step.tips?.map((tip, t) => (
                            <li key={t} className="flex items-center text-sm text-gray-500">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" /> {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {!isLast && (
                    <motion.div 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }} 
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }} 
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-emerald-500 text-white p-2 rounded-full"
                        animate={{ y: [0, 5, 0] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* DESKTOP: Correct sequence with proper arrows */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 relative">
            {recyclingData.howToRecycle.steps.map((step, index) => {
              const IconComponent = getIcon(step.icon as any);
              const CheckCircle = getIcon('CheckCircle');
              const ArrowRight = getIcon('ArrowRight');
              
              return (
                <motion.div 
                  key={`d-${index}`} 
                  className="relative" 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors h-full"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {`${index + 1}. ${step.title}`}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className="space-y-1">
                          {step.tips?.map((tip, t) => (
                            <li key={t} className="flex items-center text-sm text-gray-500">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" /> {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrows showing correct sequence: 1→2, 2→3, 3→4 */}
                  {/* 1 → 2 (horizontal right) */}
                  {index === 0 && (
                    <motion.div 
                      className="absolute top-1/2 -right-6 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }} 
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }} 
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-emerald-500 text-white p-2 rounded-full"
                        animate={{ x: [0, 5, 0] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* 2 → 3 (vertical down) */}
                  {index === 1 && (
                    <motion.div 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0 }} 
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }} 
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-emerald-500 text-white p-2 rounded-full"
                        animate={{ y: [0, 5, 0] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* 3 → 4 (horizontal right) */}
                  {index === 2 && (
                    <motion.div 
                      className="absolute top-1/2 -right-6 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }} 
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 }} 
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-emerald-500 text-white p-2 rounded-full"
                        animate={{ x: [0, 5, 0] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{recyclingData.impact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {recyclingData.impact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recyclingData.impact.points.map((point, index) => {
              const IconComponent = getIcon(point.icon as any);
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-full w-fit mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{recyclingData.whyItMatters.title}</h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {recyclingData.whyItMatters.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-emerald-50 to-blue-50 p-12 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recyclingData.whyItMatters.metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {recyclingData.callToAction.title}
          </motion.h2>
          <motion.p
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {recyclingData.callToAction.subtitle}
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {recyclingData.callToAction.features.map((feature, index) => {
                const IconComponent = getIcon(feature.icon as any);
                return (
                  <div key={index}>
                    <IconComponent className="h-12 w-12 text-white mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-emerald-100 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {recyclingData.callToAction.buttons.map((button, index) => {
              const IconComponent = getIcon(button.icon as any);
              return (
                <motion.a
                  key={index}
                  href={button.link}
                  className={`px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl ${
                    button.type === 'primary' 
                      ? 'bg-white text-emerald-600 hover:bg-gray-50' 
                      : 'border-2 border-white text-white hover:bg-white hover:text-emerald-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="mr-3 h-6 w-6" />
                  {button.text}
                  {button.icon === 'ArrowRight' && (
                    <IconComponent className="ml-3 h-6 w-6" />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingGuide;