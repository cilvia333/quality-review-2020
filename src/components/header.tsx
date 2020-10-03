import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import BackButton from '../assets/svgs/back-arrow.svg';
import TitleLogo from '../assets/svgs/title.svg';

const Header: React.FC = () => {
  const router = useRouter();
  const [isArticle, setIsArticle] = useState(false);

  useEffect(() => {
    const pathname = router.pathname.split('/')[1];

    if (pathname === '') {
      setIsArticle(false);
    } else {
      setIsArticle(true);
    }
  }, [router]);

  return (
    <Wrapper>
      <Link href="/">
        <StyledLogo />
      </Link>
      <Link href="/">
        <StyledBackButton isActive={isArticle} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  ${tw`fixed px-12 py-8 z-10 flex justify-between`}
  top: 0;
  right: 0;
  left: 0;
`;

const StyledLogo = styled(TitleLogo)`
  ${tw`h-12 fill-current text-gray-900 cursor-pointer`}
`;

const StyledBackButton = styled(BackButton)<{ isActive: boolean }>`
  ${tw`h-12 w-12 text-gray-900 fill-current cursor-pointer hidden`}

  ${({ isActive }) =>
    isActive &&
    css`
      ${tw`block`}
    `}
`;

export default Header;
