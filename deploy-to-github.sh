#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."
echo ""

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    
    # Deploy to gh-pages branch
    echo "🌐 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo "🌐 Your site will be live at: https://harshpatelweb.github.io/"
        echo "⏱️  It may take 1-2 minutes to update"
        echo ""
    else
        echo "❌ Deployment failed. Please check the errors above."
        exit 1
    fi
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
