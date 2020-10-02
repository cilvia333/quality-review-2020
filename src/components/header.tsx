import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import TitleLogo from '..//assets/svgs/title.svg';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/">
        <StyledLogo />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  ${tw`m-4`}
`;

const StyledLogo = styled(TitleLogo)`
  ${tw`h-12`}
`;

export default Header;
