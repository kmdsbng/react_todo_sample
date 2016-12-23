import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import Application from './Application';
import './index.css';

class Renderer {
  render(app) {
    ReactDOM.render(
      <RootComponent app={app} />,
      document.getElementById('root')
    );
  }
}

const renderer = new Renderer();
function renderApplication() {
  renderer.render(app);
}
const app = new Application(renderApplication.bind(this));
renderApplication();

