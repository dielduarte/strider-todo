import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Home from './components/HOC/Home';

import './assets/glamor/index';
import './config/webfont';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import * as stores from './stores';

ReactDOM.render(
    <MuiThemeProvider>
      <Provider { ...stores }>
        <Home />
      </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);
