#!/bin/bash

echo "🎨 Building your portfolio website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Your site is ready in the 'dist' folder"
    echo ""
    echo "🚀 Deployment options:"
    echo "  1. Push to GitHub - GitHub Actions will auto-deploy"
    echo "  2. Upload 'dist' folder to your hosting service"
    echo "  3. Run 'npm run preview' to preview locally"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
