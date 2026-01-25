# 🎸 Portfolio Website - Setup Guide

## 📸 Your Profile Image
Your profile image (`43073411.jpeg`) is now set as the main hero image!

## 🎵 Adding YouTube Videos

### For Music Section (Guitar & Singing)

Edit `src/components/Music.jsx` and add your YouTube video IDs:

```javascript
const videos = [
  {
    id: 'guitar1',
    title: 'Guitar Performance',
    youtubeId: 'YOUR_VIDEO_ID_HERE', // Replace with your video ID
    description: 'A beautiful guitar performance showcasing my musical skills.'
  },
  {
    id: 'singing1',
    title: 'Singing Performance',
    youtubeId: 'YOUR_VIDEO_ID_HERE', // Replace with your video ID
    description: 'A vocal performance demonstrating my singing abilities.'
  }
]
```

**How to get YouTube Video ID:**
- From URL: `youtube.com/watch?v=VIDEO_ID` - copy the part after `v=`
- Example: `youtube.com/watch?v=dQw4w9WgXcQ` → Video ID is `dQw4w9WgXcQ`

### For Professional Section

Edit `src/components/Professional.jsx` and add your professional videos:

```javascript
const videos = [
  {
    id: 'professional1',
    title: 'MLOps Deployment on AWS',
    youtubeId: 'pqBrzDNox1U', // Already added
    description: 'Your description here.'
  },
  // Add more videos here
]
```

## 🎨 Design Themes

### Music Section
- **Theme**: Warm, elegant, vintage music aesthetic
- **Colors**: Deep purples, soft pinks, elegant whites
- **Fonts**: Playfair Display (elegant serif), Dancing Script (cursive)
- **Style**: Sophisticated, artistic, music-focused

### Professional Section
- **Theme**: Cyberpunk retro terminal aesthetic
- **Colors**: Neon cyan, magenta, green on dark background
- **Fonts**: Orbitron, Share Tech Mono (terminal style)
- **Style**: Tech-focused, futuristic, coding aesthetic

## 🚀 Running the Site

```bash
npm run dev
```

Visit: http://localhost:5173/

## 📦 Deploying

```bash
npm run deploy
```

## ✨ Features

- ✅ Your profile image in hero section
- ✅ Music section with elegant design
- ✅ Professional section with cyberpunk theme
- ✅ YouTube video embedding ready
- ✅ Responsive design
- ✅ Smooth animations

## 📝 Next Steps

1. Add your YouTube video IDs to the Music component
2. Add more professional videos if needed
3. Customize descriptions and titles
4. Deploy to GitHub Pages!
