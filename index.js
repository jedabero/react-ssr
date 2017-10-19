import "regenerator-runtime/runtime";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import express from 'express';
import fs from 'fs';

import App from './src/App';
import reducer from './src/reducer';

const index = fs.readFileSync(__dirname + '/public/index.html', 'utf8');

const app = express();

app.use(express.static('build/static'));

app.get('**', async (req, res) => {
  const initialState = { items: ["Po</script><script>alert('You have an XSS vulnerability!')</script>op"], loading: false };
  const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const serializedInitialState = serialize(JSON.stringify(initialState));
  const finalHtml = index.replace('<!-- ::APP:: -->', html).replace('{/* ::APP:: */}', serializedInitialState);
  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(finalHtml);
  }
});

app.listen(8080);

export default app;