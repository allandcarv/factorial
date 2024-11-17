import express from 'express';
import { cors } from './src/config/cors';

const SERVER_PORT = 3001;
const app = express();

app.use(cors);
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
