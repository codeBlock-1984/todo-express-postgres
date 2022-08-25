import express from 'express';
import { config } from 'dotenv';
import { initializeDb } from './prisma';
import baseRouter from './routes';

config();

const port = process.env.PORT || 6000;

const server = express();

server.use(express.json());
server.use('/api/v1', baseRouter);

server.use('/', (req, res) => {
  res.send('Welcome to Todo Express Server')
});

initializeDb();

server.listen(port, () => {
  console.log(`Todo Express server listening on port ${port}`);
});
