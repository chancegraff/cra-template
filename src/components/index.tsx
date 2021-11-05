import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 24px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Create Budget</title>
        <style>@import-normalize;</style>
      </Helmet>
      <GlobalStyle />
    </div>
  );
};

export default App;
