import "regenerator-runtime/runtime";
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import fs from 'fs';

import App from './src/App';
import getItems from './src/items';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');

const app = express();
app.get('**', async (req, res) => {
  const items = await getItems();
  const html = renderToString(<App items={items} />);
  const finalHtml = index.replace('<!-- ::APP:: -->', html);
  res.send(finalHtml);
});

app.listen(8080);

export default app;