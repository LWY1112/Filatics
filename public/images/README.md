# Image Storage Guide

This folder contains all the local images for the Filatics website.

## 📁 Folder Structure

```
public/images/
├── hero/           # Main page banner images
├── team/           # Team member photos
├── sponsors/       # Sponsor/partner logos
├── awards/         # Award certificates/photos
└── workshops/      # Workshop event photos
```

## 📸 How to Add Images

### 1. **Save Your Images**
Place your image files in the appropriate folders:
- **Hero images** → `public/images/hero/`
- **Team photos** → `public/images/team/`
- **Sponsor logos** → `public/images/sponsors/`
- **Award images** → `public/images/awards/`
- **Workshop photos** → `public/images/workshops/`

### 2. **Update Image Paths**
Edit `src/data/images/index.ts` to point to your new images:

```typescript
// Example: Adding a new team member photo
team: {
  bryant: "/images/team/bryant.jpg",
  newMember: "/images/team/new-member-photo.jpg"  // Add this line
}
```

### 3. **Use in Data Files**
Reference the images in your data files:

```typescript
// In src/data/contactData.ts
import { images } from './images';

team: {
  members: [
    {
      name: "New Member",
      image: images.team.newMember,  // Uses the path from images/index.ts
      // ... other details
    }
  ]
}
```

## 🎯 **Recommended Image Sizes**

- **Hero Images**: 1200x600px (landscape)
- **Team Photos**: 400x400px (square)
- **Sponsor Logos**: 200x200px (square, transparent background preferred)
- **Award Images**: 300x300px (square)
- **Workshop Photos**: 800x600px (landscape)

## 📝 **File Naming Convention**

Use descriptive, lowercase names with hyphens:
- ✅ `bryant-yong.jpg`
- ✅ `eco-tech-logo.png`
- ✅ `sustainability-workshop.jpg`
- ❌ `IMG_001.jpg`
- ❌ `photo 1.jpg`

## 🔄 **How It Works**

1. You save images in `public/images/` folders
2. Update paths in `src/data/images/index.ts`
3. Data files automatically use the correct paths
4. Website displays your local images

This system makes it easy to manage all your images in one place!