import React, {FC} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import {Home} from './modules/home/components/Home';
import {NotFound} from './modules/home/components/NotFound';

const GlobalStyle = createGlobalStyle`
  html,body{
    color:#333;
    margin:0;
    padding:0;
    font-family:sans-serif;
    text-align:center;
    height:100%
  }
  
  #root {
    height: 100%;
  }
`;

export const App: FC = () => (
  <>
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);
