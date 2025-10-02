import { images } from './images';

export const workshopsData = {
  hero: {
    title: "Educational Workshops",
    subtitle: "Join our hands-on workshops to learn about sustainable practices, recycling technologies, and how you can make a positive impact in your community."
  },

  upcomingWorkshops: {
    title: "Upcoming Workshops",
    subtitle: "Register now for our upcoming educational sessions and hands-on learning experiences",
    workshops: [
      {
        id: 1,
        title: "3D Printing with Recycled Filament",
        date: "2024-03-15",
        time: "2:00 PM - 5:00 PM",
        location: "Filatics Lab, KL",
        capacity: "15 participants",
        description: "Learn how recycled plastic is transformed into filament and try your hand at 3D printing sustainable creations.",
        status: "available",
        registrationUrl: "https://forms.google.com/your-workshop-form-1"
      },
      {
        id: 2,
        title: "Sustainability in Action",
        date: "2024-03-22", 
        time: "10:00 AM - 1:00 PM",
        location: "Community Center, KL",
        capacity: "25 participants",
        description: "A hands-on workshop on recycling practices and building eco-friendly habits for sustainable living.",
        status: "filling-fast",
        registrationUrl: "https://forms.google.com/your-workshop-form-2"
      },
      {
        id: 3,
        title: "Plastic Waste to Innovation",
        date: "2024-04-05",
        time: "9:00 AM - 12:00 PM", 
        location: "University Lab Building",
        capacity: "20 participants",
        description: "Discover the complete process of converting plastic waste into valuable resources and innovative products.",
        status: "available",
        registrationUrl: "https://forms.google.com/your-workshop-form-3"
      },
      {
        id: 4,
        title: "Community Recycling Drive",
        date: "2024-04-12",
        time: "8:00 AM - 11:00 AM",
        location: "Various Locations, KL",
        capacity: "50 participants", 
        description: "Join our community-wide recycling initiative and learn how to organize effective recycling drives.",
        status: "available",
        registrationUrl: "https://forms.google.com/your-workshop-form-4"
      }
    ]
  },

  workshopBenefits: {
    title: "What You'll Gain",
    subtitle: "Our workshops provide valuable skills, knowledge, and connections in the sustainability field",
    benefits: [
      {
        title: "Practical Skills",
        description: "Learn hands-on techniques you can immediately apply in your daily life and community projects.",
        icon: "CheckCircle"
      },
      {
        title: "Network Building",
        description: "Connect with like-minded individuals, professionals, and potential collaborators in sustainability.",
        icon: "Users"
      },
      {
        title: "Resources & Support",
        description: "Access ongoing resources, mentorship, and support from our team and community.",
        icon: "ExternalLink"
      }
    ]
  },

  pastWorkshops: {
    title: "Past Workshops",
    subtitle: "Showcase photos & testimonials from previous events and the impact of our educational programs",
    workshops: [
      {
        title: "Eco-Innovation Challenge",
        date: "2024-02-18",
        participants: 35,
        feedback: "4.9/5",
        description: "Students competed to create innovative solutions using recycled materials",
        image: images.workshops.ecoInnovation
      },
      {
        title: "Green Technology Workshop",
        date: "2024-02-11",
        participants: 28,
        feedback: "4.8/5",
        description: "Hands-on experience with sustainable technology and green innovations",
        image: images.workshops.greenTechnology
      },
      {
        title: "Community Awareness Drive",
        date: "2024-01-28",
        participants: 45,
        feedback: "4.7/5",
        description: "Educational session on plastic pollution and community-based solutions",
        image: images.workshops.communityAwareness
      },
      {
        title: "Sustainable Living Workshop",
        date: "2024-01-14",
        participants: 32,
        feedback: "4.8/5",
        description: "Practical tips and strategies for adopting sustainable lifestyle practices",
        image: images.workshops.sustainableLiving
      }
    ]
  },

  callToAction: {
    title: "Ready to Learn and Grow?",
    subtitle: "Join our next workshop and become part of the sustainable technology movement",
    buttons: [
      {
        text: "View All Workshops",
        link: "https://forms.google.com/your-general-workshop-form",
        type: "primary",
        icon: "ExternalLink"
      },
      {
        text: "Contact Us",
        link: "/contact",
        type: "secondary"
      }
    ]
  }
};