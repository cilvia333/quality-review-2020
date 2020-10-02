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
      <CardWrapper>
        {items.map((item, index) => (
          <Card key={`card_${index}`} id={item} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`p-8`}
`;

const CardWrapper = styled.ul`
  ${tw`p-8 flex flex-wrap `}
  justify-content: space-around;
`;

export default Index;
