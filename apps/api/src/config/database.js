import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

let isConnected = false;

export async function connectDatabase() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      autoIndex: env.NODE_ENV !== 'production',
    });

    isConnected = conn.connections[0].readyState === 1;
    logger.info({ host: conn.connection.host }, 'MongoDB Atlas connection established.');
  } catch (error) {
    logger.warn(
      { error: error.message },
      'MongoDB connection deferred or offline. Running in disconnected mode.'
    );
  }
}

export async function disconnectDatabase() {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
  logger.info('MongoDB disconnected.');
}
