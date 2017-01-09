import * as express from 'express';
import * as path from 'path';

const app: express.Application = express();

app.get('/api/status', (req: express.Request, res: express.Response) => {
  res.send('Status: ok');
});

app.use(express.static(path.join(__dirname, 'public', 'assets')));

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  /* tslint:disable no-console */
  console.log(`Server listening on ${PORT}`);
  /* tslint:enable no-console */
});
