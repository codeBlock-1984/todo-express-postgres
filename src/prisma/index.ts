import { PrismaClient, Prisma as P } from '@prisma/client';

const isDevelopment = process.env.NODE_ENV === 'development';

const config: P.PrismaClientOptions = isDevelopment
      ? { log: ['query'] }
      : {};

export const client = new PrismaClient();

export const initializeDb = async () => {
  try {
    await client.$connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection failed');
    process.exit(1);
  }
}