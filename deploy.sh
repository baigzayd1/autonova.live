#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Clean up
rm -rf node_modules build dist package-lock.json

# Install dependencies
npm install

# Build
npm run build

# Database migrations
npm run db:push

# Start server
npm run start