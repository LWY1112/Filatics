import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Sustainability First',
      description: 'Every decision we make is guided by our commitment to environmental protection and sustainable practices.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Empowerment',
      description: 'We believe in empowering communities to take action and create positive environmental change together.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Innovation & Quality',
      description: 'We continuously innovate to improve our processes and deliver the highest quality recycled products.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Continuous Growth',
      description: 'We are committed to scaling our impact and inspiring others to join the sustainability movement.'
    }
  ];

  const stats = [
    { value: 15000, label: 'KG of Plastic Recycled', suffix: '+' },
    { value: 95, label: 'Recycling Efficiency', suffix: '%' },
    { value: 25, label: 'Partner Schools', suffix: '+' },
    { value: 3, label: 'Years of Impact', suffix: '' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {' '}Filatics
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by passionate students, Filatics is on a mission to revolutionize how we think about 
                plastic waste. We transform discarded bottles into valuable 3D printing filament, creating 
                a circular economy that benefits both our planet and communities.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working on recycling project"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Filatics was born from a simple observation: plastic waste was everywhere, yet 3D printing 
                filament was expensive and often unsustainable. As students passionate about both technology 
                and environmental protection, we asked ourselves - why not solve both problems at once?
              </p>
              <p className="mb-6">
                What started as a university project quickly evolved into a full-fledged startup. We developed 
                innovative processes to clean, sort, and transform plastic waste into high-quality filament 
                that meets professional 3D printing standards.
              </p>
              <p>
                Today, we're proud to be leading the charge in sustainable 3D printing materials while 
                educating communities about the importance of proper recycling and waste management.
              </p>
            </div>
          </div>
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
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-lg w-fit mx-auto lg:mx-0 mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To transform plastic waste into valuable resources while educating and empowering communities 
                to adopt sustainable practices. We're committed to reducing plastic pollution through innovative 
                recycling solutions and creating economic opportunities in the green technology sector.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-4 rounded-lg w-fit mx-auto lg:mx-0 mb-6">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where plastic waste is viewed as a valuable resource rather than pollution. We envision 
                thriving communities equipped with the knowledge and tools to create sustainable solutions, 
                powered by circular economy principles and innovative recycling technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every aspect of our work and shape how we approach challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-lg w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Be part of the solution. Help us create a more sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Involved Today
            </a>
            <a
              href="/workshops"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Attend a Workshop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;