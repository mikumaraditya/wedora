import { createApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { connectDatabase } from './config/database.js';

const app = createApp();

const server = app.listen(env.PORT, async () => {
  logger.info(`Wedora API server listening on http://localhost:${env.PORT}`);
  // In development, attempt optional connection without crashing if DB is offline
  await connectDatabase();
});

function handleShutdown(signal) {
  logger.info(`Received ${signal}. Gracefully shutting down HTTP server...`);
  server.close(() => {
    logger.info('HTTP server closed.');
    process.exit(0);
  });
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
