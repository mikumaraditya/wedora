import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(5000),
  CLIENT_ORIGIN: z.string().default('http://localhost:5173'),
  MONGODB_URI: z.string().default('mongodb://localhost:27017/wedora'),
  JWT_ACCESS_SECRET: z.string().min(32).default('default_access_secret_wedora_min_32_chars_long'),
  JWT_REFRESH_SECRET: z.string().min(32).default('default_refresh_secret_wedora_min_32_chars_long'),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  CLOUDINARY_CLOUD_NAME: z.string().optional().default('placeholder'),
  CLOUDINARY_API_KEY: z.string().optional().default('placeholder'),
  CLOUDINARY_API_SECRET: z.string().optional().default('placeholder'),
  RESEND_API_KEY: z.string().optional().default('placeholder'),
  EMAIL_FROM: z.string().default('Wedora <noreply@example.com>'),
  GOOGLE_CLIENT_ID: z.string().optional().default('placeholder'),
});

export const env = envSchema.parse(process.env);
