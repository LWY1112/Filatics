export const homeData = {
  hero: {
    title: "Turning Plastic Waste Into 3D Printing Filament",
    subtitle: "Filatics is a green startup dedicated to fighting plastic pollution by transforming everyday waste into high-quality 3D printing filament. Join us in building a smarter, greener future.",
    buttonText: "Recycle Now",
    buttonLink: "/recycling",
    heroImage: "/images/hero/HomepageBackground.jpg",
    heroImageAlt: "3D Printing with Recycled Filament"
  },
  
  problemSection: {
    title: "The Problem We're Solving",
    statistics: [
      {
        text: "30,590 tonnes of plastic bottle waste are generated every year in Kuala Lumpur.",
        highlight: true
      },
      {
        text: "Malaysia's recycling rate is just 32%, and shockingly, 81% of recycled plastic still ends up in landfills (WWF Malaysia, 2022).",
        highlight: true
      }
    ],
    subtitle: "Why this matters: If no action is taken, it leads to:",
    problems: [
      {
        title: "Health Hazards",
        description: "Microplastics contaminate our food chain and water supply",
        icon: "AlertTriangle"
      },
      {
        title: "Resource Depletion", 
        description: "Natural resources are being exhausted to produce new plastics",
        icon: "Leaf"
      },
      {
        title: "Climate Change",
        description: "Plastic production and waste contribute to greenhouse gas emissions",
        icon: "Factory"
      }
    ]
  },

  howItWorks: {
    title: "How It Works (Step-by-Step)",
    subtitle: "Our innovative four-step process transforms everyday plastic waste into valuable 3D printing material",
    steps: [
      {
        title: "Collect",
        description: "Gather clean plastic bottles from your community and home",
        icon: "Recycle"
      },
      {
        title: "Process", 
        description: "Bottles are cut into strips and prepared for transformation",
        icon: "Factory"
      },
      {
        title: "Transform",
        description: "Our Polyformer machine converts strips into high-quality filament",
        icon: "Zap"
      },
      {
        title: "Create Impact",
        description: "The recycled filament is used for sustainable innovation and 3D printing",
        icon: "Award"
      }
    ]
  },

  impactStats: {
    title: "Our Environmental Impact",
    subtitle: "See the positive change we're creating together in our communities and environment",
    stats: [
      { value: 10000, suffix: '+', label: 'Bottles Collected' },
      { value: 20, suffix: '+', label: 'Workshops Hosted' },
      { value: 500, suffix: '+', label: 'Community Members' }
    ]
  },

  sponsors: {
    title: "Trusted by the Greatest",
    subtitle: "Working together with amazing organizations to create a sustainable future",
    partners: [
      {
        name: 'BizPod',
        logo: "/images/awards/Bizpod.png"
      },
      {
        name: 'Taylors University',
        logo: "/images/sponsors/Taylors.png"
      }
    ]
  },

  callToAction: {
    title: "Ready to Make a Difference?",
    subtitle: "Join our community of eco-warriors and help us transform waste into wonder",
    buttons: [
      {
        text: "Join Our Community",
        link: "/contact",
        type: "primary",
        icon: "Users"
      },
      {
        text: "Start Recycling Today", 
        link: "/recycling",
        type: "secondary",
        icon: "ArrowRight"
      }
    ]
  }
};