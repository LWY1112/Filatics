// Local image paths for easy management
export const images = {
  // Hero and main images - store in public/images/hero/
  hero: {
    home: "/images/hero/home-hero.jpg",
    about: "/images/hero/about-hero.jpg",
    community: "/images/hero/community.jpg"
  },

  // Team member photos - store in public/images/team/
  team: {
    bryant: "/images/team/bryant.jpg",
    ngEeZhen: "/images/team/ng-ee-zhen.jpg",
    beeXiangZi: "/images/team/bee-xiang-zi.jpg"
  },

  // Sponsor logos - store in public/images/sponsors/
  sponsors: {
    ecoTech: "/images/sponsors/eco-tech-logo.png",
    greenFuture: "/images/sponsors/green-future-logo.png",
    sustainableInnovations: "/images/sponsors/sustainable-innovations-logo.png",
    planetFirst: "/images/sponsors/planet-first-logo.png",
    innovationHub: "/images/sponsors/innovation-hub-logo.png",
    greenTechMalaysia: "/images/sponsors/green-tech-malaysia-logo.png"
  },

  // Award images - store in public/images/awards/
  awards: {
    technopreneurship: "/images/awards/technopreneurship-award.jpg",
    bizpodGrant: "/images/awards/bizpod-grant-award.jpg"
  },

  // Workshop images - store in public/images/workshops/
  workshops: {
    ecoInnovation: "/images/workshops/eco-innovation-workshop.jpg",
    greenTechnology: "/images/workshops/green-technology-workshop.jpg",
    communityAwareness: "/images/workshops/community-awareness-workshop.jpg",
    sustainableLiving: "/images/workshops/sustainable-living-workshop.jpg"
  }
};

// Helper function to get image path
export const getImage = (category: keyof typeof images, imageName: string) => {
  const categoryImages = images[category] as Record<string, string>;
  return categoryImages[imageName] || '';
};