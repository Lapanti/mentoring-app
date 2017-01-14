import * as express from 'express';
import * as path from 'path';
import { getById, IAgreement } from './agreements';

const app: express.Application = express();

app.get('/api/agreement/:id', (req: express.Request, res: express.Response) => {
  getById(req.params.id)
    .then((agreement: IAgreement) => res.json(agreement))
    .catch((err: any) => res.status(404).json(err));
});

// This is an endpoint returning similar data as FUM (Futurice User Management system)
// to get the correct kind of data for the frontend until real integration can be done
app.get('/api/sampleusers', (req: express.Request, res: express.Response) => {
  res.json([{
    email: "lauri.lavanti@futurice.com",
    first_name: "Lauri",
    last_name: "Lavanti",
  },
  {
    email: "juho.vaha-herttua@futurice.com",
    first_name: "Juho",
    last_name: "Vähä-Herttua",
  },
  {
    email: "pekka.neuvo@futurice.com",
    first_name: "Pekka",
    last_name: "Neuvo",
  }]);
});

app.use(express.static(path.join(__dirname, '..', 'public', 'assets')));

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  /* tslint:disable no-console */
  console.log(`Server listening on ${PORT}`);
  /* tslint:enable no-console */
});
