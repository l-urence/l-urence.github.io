import React, {FC} from 'react';
import {createGlobalStyle} from 'styled-components';

import {Home} from './modules/home/components/Home';

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
    <Home />
    <GlobalStyle />
  </>
);
