# Deployment Guide for Autonova.live on Replit

This guide provides comprehensive instructions for deploying the Autonova.live application on Replit.

## Prerequisites

- Replit account
- PostgreSQL database (recommended: Neon Database)
- Basic understanding of environment variables

## Quick Start

1. **Fork or Import the Repository**
   - Open [Replit](https://replit.com)
   - Click "Create Repl" → "Import from GitHub"
   - Enter the repository URL: `https://github.com/baigzayd1/autonova.live`

2. **Set Up Environment Variables**
   - Go to the "Secrets" tab in your Replit
   - Add the following secrets based on `.env.example`:
     ```
     DATABASE_URL=postgresql://your_username:password@your_host:5432/your_database
     SESSION_SECRET=your_super_secure_random_string
     NODE_ENV=production
     ```

3. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Set Up Database**
   ```bash
   npm run db:push
   ```

5. **Start the Application**
   ```bash
   npm run dev
   ```

## Detailed Configuration

### Environment Variables

Create these secrets in Replit's "Secrets" tab:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `SESSION_SECRET` | Secret for session management | `your-random-256-bit-key` |
| `NODE_ENV` | Environment mode | `production` |

### Database Setup

#### Option 1: Neon Database (Recommended)
1. Visit [Neon](https://neon.tech) and create a free account
2. Create a new project and database
3. Copy the connection string from the dashboard
4. Add it as `DATABASE_URL` in Replit secrets

#### Option 2: Supabase
1. Visit [Supabase](https://supabase.com) and create a project
2. Go to Settings → Database
3. Copy the connection string (use the direct connection)
4. Add it as `DATABASE_URL` in Replit secrets

#### Option 3: Local PostgreSQL (Development Only)
If using Replit's built-in PostgreSQL:
```bash
# Start PostgreSQL service
pg_ctl start

# Create database
createdb autonova

# Set DATABASE_URL
DATABASE_URL=postgresql://postgres@localhost:5432/autonova
```

### Build and Deployment Scripts

The application includes several npm scripts for different deployment scenarios:

- `npm run dev` - Development server with hot reloading
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run deploy` - Build and push database schema
- `npm run health` - Health check

### Port Configuration

The application is configured to run on port 5000, which is the standard for Replit deployments. The port is automatically detected from the `PORT` environment variable or defaults to 5000.

## Production Deployment

### Manual Deployment
1. Build the application:
   ```bash
   npm run build
   ```

2. Push database schema:
   ```bash
   npm run db:push
   ```

3. Start the production server:
   ```bash
   npm run start
   ```

### Automated Deployment
The `.replit` file is configured for automatic deployment:
- On Replit, click the "Deploy" button
- The deployment will automatically run `npm run deploy`
- The application will be available at your Replit URL

## Monitoring and Troubleshooting

### Health Check
The application includes a health check endpoint at `/api/health` that returns:
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2025-01-XX...",
  "environment": "production"
}
```

### Common Issues

#### 1. Database Connection Failed
**Problem**: `DATABASE_URL` not set or incorrect
**Solution**: 
- Check that `DATABASE_URL` is correctly set in Replit secrets
- Verify the database is accessible and credentials are correct
- Test connection with `npm run db:push`

#### 2. Port Already in Use
**Problem**: Port 5000 is occupied
**Solution**: 
- Restart your Repl
- Check for other processes using the port

#### 3. Build Failures
**Problem**: Dependencies or TypeScript errors
**Solution**:
- Run `npm install --legacy-peer-deps`
- Check TypeScript with `npm run check`
- Review build logs for specific errors

#### 4. Database Schema Issues
**Problem**: Database tables not created
**Solution**:
- Run `npm run db:push` to sync schema
- Check database credentials and permissions

### Performance Optimization

For production deployments:

1. **Environment Variables**: Set `NODE_ENV=production`
2. **Database Connection Pooling**: The app uses connection pooling by default
3. **Static Asset Serving**: Built assets are served efficiently by Express
4. **Gzip Compression**: Consider adding compression middleware for large assets

## Security Considerations

1. **Environment Variables**: Never commit `.env` files or secrets
2. **Database Access**: Use connection strings with SSL enabled
3. **Session Security**: Use a strong, random `SESSION_SECRET`
4. **CORS**: Configure CORS for production domains if needed

## Backup and Recovery

### Database Backup
For Neon Database:
1. Use Neon's built-in backup features
2. Or export with: `pg_dump $DATABASE_URL > backup.sql`

### Application Backup
- The entire application state is in the repository
- Database schema is version-controlled via Drizzle migrations
- No additional backup needed for application files

## Scaling Considerations

### Horizontal Scaling
- The application is stateless and can be scaled horizontally
- Session data is stored in the database (if sessions are implemented)
- Consider Redis for session storage in high-traffic scenarios

### Database Scaling
- Neon automatically scales based on usage
- For high traffic, consider database connection pooling
- Monitor database performance and upgrade plan as needed

## Support

For deployment issues:
1. Check the Replit console for error messages
2. Review the health check endpoint `/api/health`
3. Check database connectivity with `npm run db:push`
4. Refer to the main README.md for application-specific details

## Additional Resources

- [Replit Documentation](https://docs.replit.com)
- [Neon Database Docs](https://neon.tech/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Express.js Guide](https://expressjs.com/en/guide/)