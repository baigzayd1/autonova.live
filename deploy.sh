#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Clean up
rm -rf node_modules build dist package-lock.json

# Install dependencies
npm install

# Create minimal production environment
echo "NODE_ENV=production" > .env
echo "PORT=3000" >> .env

# Build
npm run build

# Start server
npm run start