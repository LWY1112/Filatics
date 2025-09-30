import { Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle } from 'lucide-react';

const Workshops = () => {
  const upcomingWorkshops = [
    {
      id: 1,
      title: 'Introduction to Plastic Recycling',
      date: '2024-02-15',
      time: '2:00 PM - 4:00 PM',
      location: 'University Lab Building',
      capacity: '20 participants',
      description: 'Learn the basics of plastic identification, sorting, and the recycling process. Perfect for beginners interested in sustainability.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-1'
    },
    {
      id: 2,
      title: '3D Printing with Recycled Filament',
      date: '2024-02-22',
      time: '10:00 AM - 1:00 PM',
      location: 'MakerSpace Center',
      capacity: '15 participants',
      description: 'Hands-on workshop where you\'ll create 3D prints using our recycled filament. Bring your ideas to life sustainably!',
      status: 'filling-fast',
      registrationUrl: 'https://forms.google.com/your-workshop-form-2'
    },
    {
      id: 3,
      title: 'Community Recycling Drive Setup',
      date: '2024-03-01',
      time: '9:00 AM - 12:00 PM',
      location: 'Community Center',
      capacity: '30 participants',
      description: 'Learn how to organize and run effective recycling drives in your neighborhood. Includes planning, logistics, and engagement strategies.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-3'
    },
    {
      id: 4,
      title: 'Advanced Filament Processing',
      date: '2024-03-08',
      time: '1:00 PM - 5:00 PM',
      location: 'Filatics Lab',
      capacity: '12 participants',
      description: 'Deep dive into the technical aspects of converting plastic waste to filament. Includes quality control and testing methods.',
      status: 'available',
      registrationUrl: 'https://forms.google.com/your-workshop-form-4'
    }
  ];

  const pastWorkshops = [
    {
      title: 'Sustainability in 3D Printing',
      date: '2024-01-18',
      participants: 25,
      feedback: '4.8/5',
      description: 'Explored eco-friendly 3D printing practices and materials'
    },
    {
      title: 'Plastic Waste Awareness',
      date: '2024-01-11',
      participants: 40,
      feedback: '4.9/5',
      description: 'Community education on plastic pollution and solutions'
    },
    {
      title: 'DIY Recycling Setup',
      date: '2023-12-14',
      participants: 18,
      feedback: '4.7/5',
      description: 'Workshop on setting up small-scale recycling systems'
    },
    {
      title: 'Green Innovation Challenge',
      date: '2023-12-07',
      participants: 35,
      feedback: '4.8/5',
      description: 'Hackathon focused on sustainable technology solutions'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Educational 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              {' '}Workshops
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our hands-on workshops to learn about sustainable practices, recycling technologies, 
            and how you can make a positive impact in your community.
          </p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register now for our upcoming educational sessions and hands-on learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all">
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
                
                <a
                  href={workshop.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all flex items-center justify-center"
                >
                  Register Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our workshops provide valuable skills, knowledge, and connections in the sustainability field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Skills</h3>
              <p className="text-gray-600">Learn hands-on techniques you can immediately apply in your daily life and community projects.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Building</h3>
              <p className="text-gray-600">Connect with like-minded individuals, professionals, and potential collaborators in sustainability.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resources & Support</h3>
              <p className="text-gray-600">Access ongoing resources, mentorship, and support from our team and community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what we've accomplished together and the impact of our educational programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWorkshops.map((workshop, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(workshop.date).toLocaleDateString()}</span>
                  <span>{workshop.participants} participants</span>
                  <span>⭐ {workshop.feedback}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn and Grow?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join our next workshop and become part of the sustainable technology movement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.google.com/your-general-workshop-form"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              View All Workshops
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;