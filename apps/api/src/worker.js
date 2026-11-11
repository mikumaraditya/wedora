import { logger } from './utils/logger.js';
import { connectDatabase } from './config/database.js';

logger.info('Initializing Wedora background worker process...');

// Connect DB for worker operations
await connectDatabase();

logger.info('Wedora worker initialized. Awaiting Redis BullMQ job queues...');

function handleShutdown(signal) {
  logger.info(`Worker received ${signal}. Gracefully stopping job processing...`);
  process.exit(0);
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
