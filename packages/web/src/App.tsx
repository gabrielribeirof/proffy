import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import GlobalStyles from './assets/styles/global';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('app-mount'),
);
