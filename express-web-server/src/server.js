import app from './server/index.js';


const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
