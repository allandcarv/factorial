import express from 'express';
import bodyParser from 'body-parser';

import { cors } from './src/config/cors';
import { routes } from './src/routes';

const SERVER_PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors);
app.use(routes);
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
