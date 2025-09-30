import { CheckCircle, ArrowRight, Recycle, Package, Truck, Factory, AlertTriangle, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const RecyclingGuide = () => {
  const preparationSteps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Collect Bottles',
      description: 'Gather PET plastic bottles from your home and community. Look for recycling code #1.',
      tips: ['Water bottles', 'Soda bottles', 'Clear plastic containers', 'Remove caps and rings']
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Clean & Prepare',
      description: 'Rinse bottles and remove labels or caps to ensure they are ready for processing.',
      tips: ['Rinse with clean water', 'Remove all labels', 'No soap residue', 'Air dry completely']
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Drop Off or Arrange Pickup',
      description: 'Deliver bottles to Filatics or schedule collection through our pickup service.',
      tips: ['Minimum 10 bottles', 'Bundle in clear bags', 'Schedule via WhatsApp', 'Free pickup available']
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Processing',
      description: 'Bottles are shredded and turned into filament using our Polyformer machine.',
      tips: ['Industrial cleaning', 'Precision shredding', 'Quality testing', 'Filament production']
    }
  ];

  const impactPoints = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: 'Reduce Pollution',
      description: 'Every bottle recycled prevents plastic from ending up in landfills and oceans.'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Support Innovation',
      description: 'Your recycled bottles become high-quality filament for 3D printing projects.'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Inspire Change',
      description: 'Join a community movement that demonstrates sustainable living in action.'
    }
  ];

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
            Why Recycle With 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}Filatics?
            </span>
          </motion.h1>
          
          <motion.div 
            className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl font-bold text-red-800 mb-4">Did you know?</p>
            <p className="text-lg text-red-700 mb-2">
              Kuala Lumpur alone generates over 30,000 tonnes of plastic bottle waste every year.
            </p>
            <p className="text-lg text-red-700">
              With such a low recycling rate in Malaysia, every bottle you recycle can make a real difference.
            </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Recycle With Filatics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these easy steps to make sure your bottles are ready for recycling
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {preparationSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                {index % 2 === 0 && index < preparationSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
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
                {index % 2 === 1 && index < preparationSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
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
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The recycled filament is used in 3D printing, reducing plastic waste
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-full w-fit mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why It Matters</h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every bottle recycled with Filatics helps reduce pollution, supports innovation, and inspires change.
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
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">1 Bottle</div>
                <div className="text-gray-600">= 50g of filament</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20 Bottles</div>
                <div className="text-gray-600">= 1kg filament spool</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">Free</div>
                <div className="text-gray-600">Collection service</div>
              </div>
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
            Ready to Start Recycling?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of eco-warriors who are making a difference, one bottle at a time
          </motion.p>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Recycle className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Minimum 10 Bottles</h3>
                <p className="text-emerald-100 text-sm">Start your recycling journey</p>
              </div>
              <div>
                <Truck className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Free Pickup</h3>
                <p className="text-emerald-100 text-sm">We come to you</p>
              </div>
              <div>
                <Factory className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Quality Filament</h3>
                <p className="text-emerald-100 text-sm">Professional grade output</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://forms.google.com/your-recycling-form"
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Recycle className="mr-3 h-6 w-6" />
              Recycle Now
            </motion.a>
            <motion.a
              href="https://wa.me/60123456789"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
              <ArrowRight className="ml-3 h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingGuide;