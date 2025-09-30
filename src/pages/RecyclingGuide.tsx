import { CheckCircle, ArrowRight, Recycle, Package, Truck, Factory } from 'lucide-react';

const RecyclingGuide = () => {
  const preparationSteps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Clean Your Bottles',
      description: 'Rinse bottles thoroughly with water to remove all food residue, labels, and adhesives. Dry completely.',
      tips: ['Remove all labels and stickers', 'No soap residue', 'Air dry completely']
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Check Plastic Type',
      description: 'Look for recycling codes #1 (PET) or #2 (HDPE) on the bottom. These work best for our process.',
      tips: ['PET bottles (water, soda)', 'HDPE bottles (milk, detergent)', 'Avoid mixed plastics']
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Sort and Bundle',
      description: 'Group bottles by plastic type and color. Bundle in clear bags for easy identification.',
      tips: ['Separate by color', 'Use clear bags only', 'Maximum 20 bottles per bag']
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Schedule Pickup',
      description: 'Contact us to arrange collection or drop off at one of our designated collection points.',
      tips: ['Minimum 5 bottles', 'Flexible pickup times', 'Free collection service']
    }
  ];

  const processSteps = [
    {
      title: 'Collection & Sorting',
      description: 'We collect your prepared bottles and sort them by plastic type and quality in our facility.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Cleaning & Shredding',
      description: 'Bottles undergo thorough industrial cleaning and are then shredded into small flakes.',
      image: 'https://images.pexels.com/photos/3735746/pexels-photo-3735746.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Melting & Extrusion',
      description: 'Plastic flakes are melted and extruded into consistent diameter filament spools.',
      image: 'https://images.pexels.com/photos/3735744/pexels-photo-3735744.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Quality Testing',
      description: 'Each batch is tested for strength, consistency, and print quality before packaging.',
      image: 'https://images.pexels.com/photos/3735745/pexels-photo-3735745.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const acceptedItems = [
    { name: 'Water Bottles', type: 'PET #1', status: '✅ Accepted' },
    { name: 'Soda Bottles', type: 'PET #1', status: '✅ Accepted' },
    { name: 'Milk Jugs', type: 'HDPE #2', status: '✅ Accepted' },
    { name: 'Detergent Bottles', type: 'HDPE #2', status: '✅ Accepted' },
    { name: 'Food Containers', type: 'PP #5', status: '⚠️ Contact Us' },
    { name: 'Yogurt Cups', type: 'PP #5', status: '⚠️ Contact Us' }
  ];

  const rejectedItems = [
    'Bottles with labels still attached',
    'Dirty or contaminated bottles',
    'Mixed plastic types',
    'Bottles with metal components',
    'Black or very dark colored plastics',
    'Degraded or cracked bottles'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Recycling 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}Guide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn how to properly prepare your plastic bottles for our recycling process. 
            Every bottle you recycle helps create sustainable 3D printing filament and reduces plastic waste.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">1 Bottle</div>
                <div className="text-gray-600">= 50g of filament</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">20 Bottles</div>
                <div className="text-gray-600">= 1kg filament spool</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">Free</div>
                <div className="text-gray-600">Collection service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Prepare Your Bottles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to ensure your plastic bottles are ready for our recycling process
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {preparationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors">
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
                </div>
                
                {index < preparationSteps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-500 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Accepted Items */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Accept</h2>
              <div className="space-y-4">
                {acceptedItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status.includes('✅') 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Don't Accept */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Don't Accept</h2>
              <div className="space-y-4">
                {rejectedItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">❌</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Not sure about an item?</h3>
                <p className="text-blue-700 mb-4">
                  Contact us with photos of your items and we'll help you determine if they're suitable for recycling.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  WhatsApp us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Happens After Collection?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow your bottles' journey from waste to wonderful 3D printing filament
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Recycling?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of eco-warriors who are making a difference, one bottle at a time
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Recycle className="h-12 w-12 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Minimum 5 Bottles</h3>
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
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.google.com/your-recycling-form"
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <Recycle className="mr-3 h-6 w-6" />
              Schedule Pickup Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Us
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingGuide;