import * as express from 'express';

const app = express();

app.get('/api/status', (req, res) => {
  res.send('Ok');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  /* tslint:disable no-console */
  console.log(`Server listening on ${PORT}`);
  /* tslint:enable no-console */
});
