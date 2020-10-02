import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Card from '~/components/card';

const Index: React.FC = () => {
  const items: string[] = [
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
    'di19551',
  ];

  return (
    <Wrapper>
      <Head>
        <title>QualityReview2020</title>
        <meta property="description" content="" />
        <meta property="og:title" content="QualityReview2020" />
        <meta property="og:description" content="" />
        <meta
          property="og:url"
          content="https://quality-review-2020.vercel.app/"
        />
        <meta property="og:image" content="" />
        <meta property="twitter:title" content="QualityReview2020" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <CardWrapper>
        {items.map((item, index) => (
          <Card key={`card_${index}`} id={item} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${tw`p-8`}
`;

const CardWrapper = styled.ul`
  ${tw`p-8 flex flex-wrap `}
  justify-content: space-around;
`;

export default Index;
