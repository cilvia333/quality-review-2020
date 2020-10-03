import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Card from '~/components/card';

const Index: React.FC = () => {
  const items: string[] = [
    'di19551',
    'di18001',
    'di18002',
    'di18003',
    'di18004',
    'di18005',
    'di19551',
    'di18001',
    'di18002',
    'di18003',
    'di18004',
    'di18005',
    'di19551',
    'di18001',
    'di18002',
    'di18003',
    'di18004',
    'di18005',
    'di19551',
    'di18001',
    'di18002',
    'di18003',
    'di18004',
    'di18005',
    'di19551',
    'di18001',
    'di18002',
    'di18003',
    'di18004',
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
        <meta
          property="og:image"
          content="https://quality-review-2020.vercel.app/ogp.png"
        />
        <meta property="twitter:title" content="QualityReview2020" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <MV src={require('images/MV.png')} />
      <CardTitle>WORKS</CardTitle>
      <CardWrapper>
        {items.map((item, index) => (
          <Card key={`card_${index}`} id={item} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${tw``}
`;

const MV = styled.img`
  ${tw`h-screen w-full object-cover`}
`;

const CardWrapper = styled.ul`
  ${tw`p-16 pt-0 m-0 flex flex-wrap `}
  justify-content: space-around;
`;

const CardTitle = styled.h2`
  ${tw`mt-12 font-bold text-4xl leading-none text-center font-header text-primary`}
`;

export default Index;
