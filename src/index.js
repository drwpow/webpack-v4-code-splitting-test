import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

const One = Loadable({
  loader: () => import('./pages/One'),
  loading: () => <div />,
});
const Two = Loadable({
  loader: () => import('./pages/Two'),
  loading: () => <div />,
});
const Three = Loadable({
  loader: () => import('./pages/Three'),
  loading: () => <div />,
});

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/page/1">Page 1</Link>
        <Link to="/page/2">Page 2</Link>
        <Link to="/page/3">Page 3</Link>
      </nav>
      <Route path="/page/1" component={One} />
      <Route path="/page/2" component={Two} />
      <Route path="/page/3" component={Three} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
