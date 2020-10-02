import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

import Header from '~/components/header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  h1 {
    ${tw`font-sans text-4xl`}
  }
`;

export type Props = AppProps;
const App: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
