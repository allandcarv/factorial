import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import { cors } from './src/config/cors';
import { routes } from './src/routes';
import { errorResponse } from './src/middlewares/error-response';
import { notFounResponse } from './src/middlewares/not-found-response';

interface ResponseError extends Error {
  status?: number;
}

const SERVER_PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(errorResponse);
app.use(cors);
app.use(routes);
app.use(notFounResponse);
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
