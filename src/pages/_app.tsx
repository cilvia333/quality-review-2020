import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

import Footer from '~/components/footer';
import Header from '~/components/header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    position: relative;
  }
  h1 {
    ${tw`font-sans text-4xl`}
  }

  main {
    padding-top: 7.5rem;
  }
`;

export type Props = AppProps;
const App: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
