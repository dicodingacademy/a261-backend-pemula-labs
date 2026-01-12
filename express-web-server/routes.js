import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  res.send('Welcome to the Home Page!');
});

router.get('/about', (_, res) => {
  res.send('About page');
});

router.get(['/hello', '/hello/:name'], (req, res) => {
  const name = req.params.name || 'stranger';
  const lang = req.query.lang;

  if (lang === 'id') {
    return res.send(`Hai, ${name}!`);
  }

  return res.send(`Hello, ${name}!`);
});

router.all('/', (_, res) => {
  res.send('Halaman tidak dapat diakses dengan method tersebut');
});

router.all('/about', (_, res) => {
  res.send('Halaman tidak dapat diakses dengan method tersebut');
});

router.all(['/hello', '/hello/:name'], (_, res) => {
  res.send('Halaman tidak dapat diakses dengan method tersebut');
});

export default router;