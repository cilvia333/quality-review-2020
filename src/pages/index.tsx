import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Index: React.FC = () => {
  return <Title>My page</Title>;
};

const Title = styled.h1`
  ${tw`text-red-500`}
`;

export default Index;
