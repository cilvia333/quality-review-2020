import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <CopyRight>
        ©︎2020 Musashino Art University, Design Informatics.{' '}
      </CopyRight>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${tw`px-12 py-8 bg-gray-900`}
`;

const CopyRight = styled.div`
  ${tw`text-center text-white`}
`;

export default Footer;
