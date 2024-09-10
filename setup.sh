#!/bin/zsh

# Remove build folder
rm -rf build

# Build Project
npm run build

# Inside Build folder
cd build

# Initialize Git
git init


# Add git origin
git remote add origin https://github.com/AbhishekGreenByte/urja.git

# Switch Brach
git checkout -b gh-pages

# Add all files to git
git add -A

# Commit all files
git commit -m "Deploy to Github Pages"

# Push to Github Pages
git push -f origin gh-pages