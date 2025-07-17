# autonova.live

A full-stack AI automation agency website built with React, TypeScript, and Express.js.

## Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/baigzayd1/autonova.live
cd autonova.live

# Install dependencies
npm install --legacy-peer-deps

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and other settings

# Set up database
npm run db:push

# Start development server
npm run dev
```

### Deploy on Replit
For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Quick Replit setup:
1. Import this repository to Replit
2. Set `DATABASE_URL` and `SESSION_SECRET` in Replit Secrets
3. Run `npm install --legacy-peer-deps`
4. Run `npm run deploy`
5. Click "Run" to start the application

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret key for sessions
- `NODE_ENV` - Environment mode (development/production)

For more details, see the [deployment guide](./DEPLOYMENT.md).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run deploy` - Build and deploy (includes DB setup)
- `npm run check` - Type check TypeScript
- `npm run health` - Health check

## Architecture

This is a modern full-stack application with:
- **Frontend**: React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **Build**: Vite (frontend) + esbuild (backend)

For complete documentation, see [replit.md](./replit.md).