import express from 'express';
import routes from './routes.js';

const app = express();
const host = 'localhost'
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
