# autonova.live

A modern full-stack web application for Autonova, an AI automation agency. Built with React frontend and Express backend, featuring a sleek landing page and contact functionality.

## 🚀 Deployment Instructions

### Prerequisites

- Node.js 20+ 
- PostgreSQL database
- Environment variables configured (see Environment Setup)

### Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Configure the required environment variables in `.env`:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NODE_ENV`: Set to `production` for deployment
   - `REPL_ID`: (Optional) For Replit deployments

### Database Setup

1. Run database migrations:
   ```bash
   npm run db:push
   ```

### Production Deployment

#### Option 1: Replit Deployment

1. Fork this repository on Replit
2. Set environment variables in Replit Secrets:
   - `DATABASE_URL`: Your PostgreSQL database URL
   - `NODE_ENV`: `production`
3. The app will automatically deploy on port 5000

#### Option 2: Railway/Heroku/Similar Platforms

1. Clone the repository:
   ```bash
   git clone https://github.com/baigzayd1/autonova.live.git
   cd autonova.live
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Set environment variables on your platform:
   - `DATABASE_URL`
   - `NODE_ENV=production`

5. Run database migrations:
   ```bash
   npm run db:push
   ```

6. Start the production server:
   ```bash
   npm run start
   ```

The application will be available on port 5000.

### Local Development

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Set up environment variables in `.env` file

3. Run database migrations:
   ```bash
   npm run db:push
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## 📝 Important Notes

### Contact Form Configuration

**⚠️ Backend Contact Submission Disabled**: The backend contact form API endpoints exist in the codebase but are not actively used for production deployments. 

**For production contact functionality:**
- Use Google Forms for contact submissions
- Replace any contact form links with your Google Forms URL
- This ensures reliable form submission without backend dependencies

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🔧 Troubleshooting

### Common Issues

1. **Port 5000 already in use**: 
   - Kill the process using port 5000: `lsof -ti:5000 | xargs kill -9`
   - Or change the port in `server/index.ts` (not recommended for deployment)

2. **Database connection failed**:
   - Verify `DATABASE_URL` is correctly set
   - Ensure PostgreSQL database is running and accessible
   - Run `npm run db:push` to set up database schema

3. **Build errors with dependencies**:
   - Use `npm install --legacy-peer-deps` to resolve peer dependency conflicts
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install --legacy-peer-deps`

4. **TypeScript errors during check**:
   - Install dependencies first: `npm install --legacy-peer-deps`
   - Type checking errors may not prevent the app from running

### Performance Optimization

- The app serves both API and static files from a single port (5000)
- Static files are served in production mode for optimal performance
- Vite development server is only used in development mode

## 🛠 Architecture

- **Frontend**: React with Vite, TailwindCSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Single port (5000) for both API and static content