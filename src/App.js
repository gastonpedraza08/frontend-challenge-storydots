import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import { store } from './store/store';

import AppRoutes from './Routes';

export default function App() {
  return (
    <Provider store={store}>
    	<CssBaseline />
      <AppRoutes />
    </Provider>
  );
}