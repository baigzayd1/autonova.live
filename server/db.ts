import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';

// Database connection
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool);