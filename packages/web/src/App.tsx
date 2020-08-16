import React from 'react';

import AppContext from './contexts';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App = () => (
  <AppContext>
    <Routes />
    <GlobalStyles />
  </AppContext>
);

export default App;
