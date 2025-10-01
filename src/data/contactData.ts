export const contactData = {
  hero: {
    title: "Be Part of the Movement",
    subtitle: "Join the Filatics community and take a stand against plastic waste. Together, we can create sustainable solutions for a better tomorrow.",
    joinButton: {
      text: "Join Now",
      link: "https://wa.me/1234567890",
      icon: "Users"
    }
  },

  community: {
    title: "Join Our Community",
    subtitle: "Connect with students, professionals, and sustainability enthusiasts",
    features: [
      {
        title: "Connect & Collaborate",
        description: "Network with students, professionals, and sustainability enthusiasts",
        icon: "Users"
      },
      {
        title: "Share Knowledge", 
        description: "Exchange ideas, tips, and best practices for sustainable living",
        icon: "MessageCircle"
      },
      {
        title: "Take Action",
        description: "Participate in community recycling drives and environmental initiatives",
        icon: "Send"
      }
    ],
    communityImage: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800",
    communityImageAlt: "Community members working together"
  },

  socialMedia: {
    title: "Connect With Us",
    subtitle: "Follow us to stay updated with our latest projects and events",
    platforms: [
      { name: "Facebook", icon: "Facebook", link: "#", color: "hover:text-blue-600" },
      { name: "Instagram", icon: "Instagram", link: "#", color: "hover:text-pink-600" },
      { name: "LinkedIn", icon: "Linkedin", link: "#", color: "hover:text-blue-700" },
      { name: "Twitter", icon: "Twitter", link: "#", color: "hover:text-blue-400" }
    ]
  },

  team: {
    title: "Meet the Team",
    subtitle: "The passionate students behind Filatics, working together to create sustainable solutions",
    members: [
      {
        name: "Alex Johnson",
        role: "Founder & CEO",
        image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Environmental Engineering student passionate about sustainable technology and green innovation."
      },
      {
        name: "Sarah Chen",
        role: "CTO & Co-founder", 
        image: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Computer Science major specializing in materials processing automation and 3D printing technology."
      },
      {
        name: "Marcus Rodriguez",
        role: "Operations Manager",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Business student focused on sustainable supply chain management and community outreach."
      },
      {
        name: "Emma Thompson",
        role: "Community Outreach",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Communications major dedicated to environmental education and building sustainable communities."
      }
    ]
  },

  contactInfo: {
    title: "Contact Us",
    details: [
      {
        type: "Email",
        value: "info@filatics.com",
        link: "mailto:info@filatics.com",
        icon: "Mail"
      },
      {
        type: "Phone", 
        value: "+60 12-345 6789",
        link: "tel:+60123456789",
        icon: "Phone"
      },
      {
        type: "Location",
        value: "Kuala Lumpur, Malaysia",
        icon: "MapPin"
      }
    ]
  },

  contactForm: {
    title: "Send us a Message",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Your full name",
        required: true
      },
      {
        name: "email",
        label: "Email Address", 
        type: "email",
        placeholder: "your@email.com",
        required: true
      },
      {
        name: "subject",
        label: "Subject",
        type: "select",
        required: true,
        options: [
          { value: "", label: "Select a subject" },
          { value: "join-community", label: "Join Community" },
          { value: "workshop", label: "Workshop Inquiry" },
          { value: "recycling", label: "Recycling Questions" },
          { value: "partnership", label: "Partnership Opportunity" },
          { value: "general", label: "General Inquiry" }
        ]
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell us how we can help you...",
        required: true,
        rows: 5
      }
    ],
    submitButton: {
      text: "Send Message",
      icon: "Send"
    },
    companyEmail: "info@filatics.com"
  },

  callToAction: {
    title: "Ready to Join Our Community?",
    subtitle: "Connect with us on social media and join our community group for regular updates and activities",
    buttons: [
      {
        text: "Join Community Group",
        link: "https://forms.google.com/your-community-form",
        type: "primary"
      },
      {
        text: "WhatsApp Us",
        link: "https://wa.me/60123456789",
        type: "secondary"
      }
    ]
  }
};