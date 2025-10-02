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
    communityImage: "/images/hero/Community.jpg",
    communityImageAlt: "Community members working together"
  },

  socialMedia: {
    title: "Connect With Us",
    subtitle: "Follow us to stay updated with our latest projects and events",
    platforms: [
      { name: "Facebook", icon: "Facebook", link: "#", color: "hover:text-blue-600" },
      { name: "Instagram", icon: "Instagram", link: "https://www.instagram.com/filatics.3d?utm_source=ig_web_button_share_sheet&igsh=MWQzdWh3M2Z5bXV0dw==", color: "hover:text-pink-600" },
      { name: "LinkedIn", icon: "Linkedin", link: "https://www.linkedin.com/company/filatics2025/?viewAsMember=true", color: "hover:text-blue-700" },
    ]
  },

  team: {
    title: "Meet the Team",
    subtitle: "The passionate students behind Filatics, working together to create sustainable solutions",
    members: [
        {
          name: "Bryant Yong Yik Hong",
          role: "Chief Executive Officer (CEO)",
          image: "/images/team/bryant.jpg",
          description: "Mechanical engineering graduate and 3D printing enthusiast, leading innovation and product development at Filatics."
        },
        {
          name: "Ng Ee Zhen",
          role: "Chief Operating Officer (COO)",
          image: "/images/team/ng-ee-zhen.jpg",
          description: "Electronics engineer passionate about robotics and microcontrollers, driving process efficiency and technical operations."
        },
        {
          name: "Bee Xiang Zi",
          role: "Chief Marketing Officer (CMO)",
          image: "/images/team/bee-xiang-zi.jpg",
          description: "Entrepreneurship graduate and sustainability advocate, focusing on marketing, partnerships, and community engagement."
        },
    ]
  },

  contactInfo: {
    title: "Contact Us",
    details: [
      {
        type: "Email",
        value: "filatics25@gmail.com",
        link: "mailto:filatics25@gmail.com",
        icon: "Mail"
      },
      {
        type: "Phone", 
        value: "+60 16-3589385",
        link: "tel:+60163589385",
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
    companyEmail: "filatics25@gmail.com"
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
        link: "https://wa.me/60163589385",
        type: "secondary"
      }
    ]
  }
};