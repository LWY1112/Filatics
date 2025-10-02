# Filatics Website - Content Management Guide

Welcome! This guide will help you update content and images on the Filatics website without any coding knowledge. Everything is explained step-by-step for beginners.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [How to Update Text Content](#how-to-update-text-content)
- [How to Add/Change Images](#how-to-addchange-images)
- [Page-by-Page Guide](#page-by-page-guide)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### What You Need to Know
- All website content is stored in **data files** (like digital documents)
- Images are stored in the **public/images/** folder
- You only need to edit text and replace image files - no coding required!

### File Structure Overview
```
📁 Your Project
├── 📁 src/data/          ← Text content files are here
│   ├── homeData.ts       ← Home page content
│   ├── aboutData.ts      ← About page content
│   ├── contactData.ts    ← Contact page content
│   └── workshopsData.ts  ← Workshops page content
└── 📁 public/images/     ← Your images go here
    ├── 📁 hero/          ← Main banner images
    ├── 📁 team/          ← Team member photos
    ├── 📁 sponsors/      ← Company logos
    ├── 📁 awards/        ← Award images
    └── 📁 workshops/     ← Workshop photos
```

---

## ✏️ How to Update Text Content

### Step 1: Find the Right File
- **Home page** → Open `src/data/homeData.ts`
- **About page** → Open `src/data/aboutData.ts`
- **Contact page** → Open `src/data/contactData.ts`
- **Workshops page** → Open `src/data/workshopsData.ts`

### Step 2: Edit the Text
1. **Find the text you want to change** (it will be between quotation marks)
2. **Keep the quotation marks** but change the text inside
3. **Save the file**

#### ✅ Example - Changing the Home Page Title:
```typescript
// BEFORE
title: "Turning Plastic Waste Into 3D Printing Filament",

// AFTER (your change)
title: "Your New Amazing Title Here",
```

#### ⚠️ Important Rules:
- **Always keep the quotation marks** `"like this"`
- **Don't delete commas** `,` at the end of lines
- **Don't change words before the colon** `title:` (these are labels)

---

## 🖼️ How to Add/Change Images

### Step 1: Prepare Your Image
1. **Resize your image** to the recommended size (see sizes below)
2. **Name your image** with a simple, descriptive name (no spaces)
   - ✅ Good: `bryant-photo.jpg`, `new-sponsor-logo.png`
   - ❌ Bad: `IMG_001.jpg`, `photo with spaces.jpg`

### Step 2: Save Your Image
Put your image in the correct folder:
- **Team photos** → `public/images/team/`
- **Sponsor logos** → `public/images/sponsors/`
- **Award images** → `public/images/awards/`
- **Workshop photos** → `public/images/workshops/`
- **Hero banners** → `public/images/hero/`

### Step 3: Update the Image Path
1. **Open the relevant data file** (homeData.ts, aboutData.ts, etc.)
2. **Find the image path** you want to change
3. **Update the path** to point to your new image

#### ✅ Example - Changing a Team Member Photo:
```typescript
// BEFORE
image: "/images/team/old-photo.jpg",

// AFTER (your change)
image: "/images/team/your-new-photo.jpg",
```

### 📏 Recommended Image Sizes
- **Team Photos**: 400x400 pixels (square)
- **Sponsor Logos**: 200x200 pixels (square, transparent background preferred)
- **Award Images**: 300x300 pixels (square)
- **Hero Images**: 1200x600 pixels (landscape)
- **Workshop Photos**: 800x600 pixels (landscape)

---

## 📄 Page-by-Page Guide

### 🏠 Home Page (`src/data/homeData.ts`)

#### Main Title & Subtitle
```typescript
hero: {
  title: "Your main headline here",
  subtitle: "Your description here",
  // ...
}
```

#### Statistics Numbers
```typescript
impactStats: {
  stats: [
    { value: 10000, suffix: '+', label: 'Bottles Collected' },
    { value: 20, suffix: '+', label: 'Workshops Hosted' },
    // Change the numbers (value) and labels as needed
  ]
}
```

#### Adding/Removing Sponsors
```typescript
partners: [
  {
    name: 'Sponsor Name',
    logo: "/images/sponsors/sponsor-logo.png"
  },
  // To add a new sponsor, copy the above block and change the details
  // To remove a sponsor, delete the entire block
]
```

### 👥 About Page (`src/data/aboutData.ts`)

#### Vision & Mission
```typescript
visionMission: {
  vision: {
    title: "Vision",
    description: "Your vision statement here",
  },
  mission: {
    title: "Mission", 
    description: "Your mission statement here",
  }
}
```

#### Adding/Removing Awards
```typescript
awards: [
  {
    title: "Award Name",
    description: "Award description here",
    year: "2025",
    image: "/images/awards/award-photo.jpg"
  },
  // To add a new award, copy the above block
  // To remove an award, delete the entire block
]
```

### 📞 Contact Page (`src/data/contactData.ts`)

#### Adding/Removing Team Members
```typescript
members: [
  {
    name: "Person's Full Name",
    role: "Their Job Title",
    image: "/images/team/person-photo.jpg",
    description: "Brief description about this person"
  },
  // To add a new team member, copy the above block
  // To remove a team member, delete the entire block
]
```

#### Contact Information
```typescript
details: [
  {
    type: "Email",
    value: "your-email@gmail.com",
    link: "mailto:your-email@gmail.com",
  },
  {
    type: "Phone", 
    value: "+60 12-3456789",
    link: "tel:+60123456789",
  },
  // Update with your actual contact details
]
```

### 🎓 Workshops Page (`src/data/workshopsData.ts`)

#### Adding New Workshops
```typescript
workshops: [
  {
    id: 1,
    title: "Workshop Name",
    date: "2024-03-15",
    time: "2:00 PM - 5:00 PM",
    location: "Workshop Location",
    capacity: "15 participants",
    description: "What this workshop is about",
    status: "available", // or "filling-fast" or "full"
    registrationUrl: "https://your-registration-link.com"
  },
  // To add a new workshop, copy the above block and change the details
]
```

---

## 🔧 Common Tasks

### ✅ Task 1: Change the Main Website Title
1. Open `src/data/homeData.ts`
2. Find the line with `title: "Turning Plastic Waste..."`
3. Change the text between the quotes
4. Save the file

### ✅ Task 2: Add a New Team Member
1. **Save their photo** in `public/images/team/` (e.g., `john-doe.jpg`)
2. **Open** `src/data/contactData.ts`
3. **Find the `members:` section**
4. **Copy an existing member block** and paste it
5. **Update the details**:
   ```typescript
   {
     name: "New Person Name",
     role: "Their Job Title",
     image: "/images/team/john-doe.jpg",
     description: "About this person"
   },
   ```
6. **Save the file**

### ✅ Task 3: Update Contact Information
1. **Open** `src/data/contactData.ts`
2. **Find the `details:` section**
3. **Update email, phone, or address**:
   ```typescript
   {
     type: "Email",
     value: "newemail@company.com",
     link: "mailto:newemail@company.com",
   }
   ```
4. **Save the file**

### ✅ Task 4: Change Statistics Numbers
1. **Open** `src/data/homeData.ts` or `src/data/aboutData.ts`
2. **Find the `stats:` section**
3. **Update the numbers**:
   ```typescript
   { value: 15000, suffix: '+', label: 'Bottles Collected' },
   ```
4. **Save the file**

---

## 🆘 Troubleshooting

### ❌ Problem: Website shows an error after my changes
**Solution**: Check these common mistakes:
- **Missing quotation marks** around text
- **Missing commas** at the end of lines
- **Deleted important punctuation** like `{`, `}`, `[`, `]`

### ❌ Problem: My image doesn't show up
**Solutions**:
1. **Check the file path** - make sure it matches exactly: `/images/folder/filename.jpg`
2. **Check the image file** - make sure it's actually saved in the right folder
3. **Check the file name** - no spaces, use hyphens instead: `my-image.jpg`

### ❌ Problem: I accidentally broke something
**Solution**: 
1. **Look at a working example** in the same file
2. **Copy the format exactly** (including all punctuation)
3. **Or ask for help** - provide the specific error message

### 🔍 Quick Checklist Before Saving:
- [ ] All text is between quotation marks `"like this"`
- [ ] All lines end with commas `,` (except the last item in a list)
- [ ] Image paths start with `/images/`
- [ ] No spaces in image file names

---

## 📞 Need Help?

If you're stuck or something isn't working:
1. **Double-check** the examples in this guide
2. **Look at existing working examples** in the same file
3. **Ask for help** and include:
   - What you were trying to do
   - What file you were editing
   - Any error messages you see

Remember: It's better to ask for help than to guess! 😊

---

## 🎉 You're All Set!

You now know how to:
- ✅ Update text content on any page
- ✅ Add and change images
- ✅ Add new team members, workshops, and sponsors
- ✅ Update contact information
- ✅ Troubleshoot common issues

**Happy editing!** 🚀