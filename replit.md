# Autonova - AI Automation Agency Website

## Overview

This is a full-stack web application for Autonova, an AI automation agency. The project is built with a React frontend and Express backend, featuring a modern landing page with contact form functionality. The application showcases AI automation services and allows potential clients to submit inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

✓ Updated website design to be white in light mode instead of black
✓ Removed contact form page and redirect functionality 
✓ Removed services and company sections from footer
✓ Updated all sections to have proper light/dark mode styling
✓ Removed contact form submission functionality - user will add Google form links manually
✓ Fixed TypeScript errors in use-cases section
✓ Updated header navigation to be white in light mode
✓ Simplified footer to only show brand and social links
✓ Added animated background beams with theme-responsive colors (black beams on light theme, white beams on dark theme)
✓ Made all sections have transparent backgrounds to show animated beams properly
✓ Added container scroll UI component with 3D perspective effects to services, process, and use-cases sections
✓ Integrated scroll-based animations that transform content as user scrolls down

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Theme**: Dark mode by default with theme switching capability

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Style**: REST API with JSON responses
- **Session Management**: PostgreSQL-backed sessions (connect-pg-simple)

### Build System
- **Bundler**: Vite for frontend build
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for backend bundling

## Key Components

### Frontend Components
- **Landing Page**: Hero section, services showcase, process overview, use cases, and unique selling propositions
- **Contact Form**: Multi-field form with validation for lead generation
- **UI Components**: Comprehensive shadcn/ui component library including buttons, forms, cards, modals, and navigation
- **Theme System**: Dark/light mode toggle with CSS variables

### Backend Components
- **Contact API**: Endpoints for creating and retrieving contact submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Route Handler**: Centralized route registration with error handling
- **Development Server**: Vite integration for hot reloading in development

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, company, interest area, and message
- **Validation**: Zod schemas for both frontend and backend validation
- **Timestamps**: Automatic creation timestamps for all records

## Data Flow

1. **Client Interaction**: Users interact with the landing page and contact form
2. **Form Submission**: Contact form data is validated client-side using Zod
3. **API Request**: Form data is sent to `/api/contacts` endpoint
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Data Storage**: Contact information is stored in PostgreSQL database
6. **Response**: Success/error response sent back to client
7. **UI Feedback**: Toast notifications inform users of submission status

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, Radix UI primitives
- **Forms**: React Hook Form, Hookform Resolvers
- **Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with React Query
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server**: Express.js framework
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Database Driver**: Neon Database serverless client
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: Full TypeScript support
- **Linting**: ESLint configuration
- **Development**: Hot reloading, error overlays

## Deployment Strategy

### Development Setup
- Run `npm run dev` for development server with hot reloading
- Frontend served through Vite development server
- Backend runs on Express with automatic TypeScript compilation
- Database migrations handled through Drizzle Kit

### Production Build
- Frontend built with Vite to static assets
- Backend bundled with esbuild for Node.js deployment
- Assets served statically by Express in production
- Database schema pushed using `npm run db:push`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific configuration for development

### Database Setup
- PostgreSQL database provisioned through Neon
- Schema defined in `shared/schema.ts`
- Migrations stored in `./migrations` directory
- Connection configured through environment variables

The application is designed to be deployed on platforms like Replit, with automatic environment detection and appropriate development/production configurations. The modular architecture allows for easy scaling and maintenance, with clear separation between frontend presentation, backend logic, and data persistence layers.