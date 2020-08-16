import React from 'react';
import ReactDOM from 'react-dom';

import AppContext from './contexts';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AppContext>
    <Routes />
    <GlobalStyles />
  </AppContext>
);

ReactDOM.render(
  <App />,
  document.getElementById('app-mount'),
);
