/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { Engine } from '@nguniversal/common/clover/server';
import * as express from 'express';
import { join } from 'path';
import { format } from 'url';

const PORT = 4200;
const HOST = `localhost:${PORT}`;
const DIST = join(__dirname, '../browser');

const app = express();
app.set('views', DIST);

app.get('*.*', express.static(DIST, {
  maxAge: '1y',
  fallthrough: false,
}));

const ssrEngine = new Engine();
app.get('*', (req, res, next) => {
  ssrEngine.render({
    publicPath: DIST,
    url: format({
      protocol: req.protocol,
      host: HOST,
      pathname: req.path,
      query: req.query as Record<string, any>,
    }),
    headers: req.headers,
  })
    .then(html => res.send(html))
    .catch(err => next(err));
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://${HOST}`);
});
