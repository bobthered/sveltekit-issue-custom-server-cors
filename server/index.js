import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import { handler } from '../build/handler.js';

const port = 3000;
const app = express();
app.use(handler);
app.use(cors());

const server = createServer(app);

server.listen(port);
