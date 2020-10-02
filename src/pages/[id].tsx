import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Item from '~/data/di19551_Shiomi.json';

const Id: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Title>
      {id}
      {Item.description}
    </Title>
  );
};

const Title = styled.h1`
  ${tw`text-red-500`}
`;

export default Id;
