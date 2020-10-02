import Link from 'next/link';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import Heart from '..//assets/svgs/heart.svg';
import HeartOutline from '..//assets/svgs/heart_outline.svg';

import Item from '~/data/di19551_Shiomi.json';
import { HSV } from '~/types/color';
import { Info } from '~/types/info';
import { rgb2hsv } from '~/util/index';

interface Props {
  info?: Info;
  id?: string;
}

const Card: React.FC<Props> = (props) => {
  const { id } = props;
  const tileColors: HSV[] = [];
  const colors: HSV[] = [];
  const [clicked, isClicked] = useState(false);
  const [h, s, v] = rgb2hsv([Item.color.r, Item.color.g, Item.color.b]);

  for (let i = 0; i < 6; i++) {
    const converedS = (s / 5) * i;
    const converedV = 100 - (v / 5) * i;
    colors.push({ h, s: converedS, v: converedV });
  }

  for (let i = 0; i < 42; i++) {
    tileColors.push(colors[Math.floor(Math.random() * Math.floor(6))]);
  }

  return (
    <Wrapper>
      <PostWrapper>
        <IconImg src={require('images/di19551/icon.png')} />
        <ContentWrapper>
          <Name>{Item.name}</Name>
          <Description>{Item.description}</Description>
          <ReadMore>
            <Link href={`/${id}`}>ReadMore...</Link>
          </ReadMore>
          <Link href={`/${id}`}>
            <ThumbnailWrapper>
              <ThumbnailImg src={require('images/di19551/thumbnail.png')} />
            </ThumbnailWrapper>
          </Link>
        </ContentWrapper>
      </PostWrapper>
      <ButtonWrapper>
        <StyledHeartOutline onClick={() => isClicked(true)} />
        <StyledHeart clicked />
      </ButtonWrapper>
      <Footer>
        {tileColors.map((color, index) => (
          <BGTile color={color} key={`tile_${index}`} />
        ))}
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`relative m-4 bg-gray-100 overflow-hidden`}
  width: 420px;
  border-radius: 16px;
`;

const PostWrapper = styled.div`
  ${tw`p-4 flex items-start`}
`;

const IconImg = styled.img`
  ${tw`h-12 w-12 object-cover rounded-full`}
`;

const ContentWrapper = styled.div`
  ${tw`pb-4 pl-4`}
`;

const Name = styled.h2`
  ${tw`m-0 text-xl rounded-full font-bold leading-none`}
`;

const Description = styled.div`
  ${tw`py-4 text-base`}
`;

const ReadMore = styled.div`
  ${tw`text-red-500 text-base no-underline`}
`;

const ThumbnailImg = styled.img`
  ${tw`relative w-full object-cover transition-all duration-500 ease-in-out cursor-pointer`}

  height: 200px;
  transform: scale(1);
`;

const ThumbnailWrapper = styled.div`
  ${tw`my-4 text-xl overflow-hidden`}
  border-radius: 16px;

  &:hover {
    ${ThumbnailImg} {
      transform: scale(1.05);
    }
  }
`;

const ButtonWrapper = styled.div`
  ${tw`absolute h-8 w-8 z-10`}
  bottom: 3rem;
  right: 1rem;
`;

const StyledHeartOutline = styled(HeartOutline)`
  ${tw`absolute h-full w-full transition-all duration-500 ease-in-out cursor-pointer`}

  stroke-width: 2px;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledHeart = styled(Heart)`
  ${tw`absolute h-8 w-8 transition-all duration-500 ease-in-out cursor-pointer`}

  stroke-width: 2px;
  transform: scale(0);

  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = styled.div`
  ${tw`flex flex-wrap`}
  height: 40px;
  bottom: -40px;
`;

const BGTile = styled.div<{ color: HSV }>`
  ${tw`relative bg-gray-500`}
  height: 20px;
  width: 20px;

  ${({ color }) => css`
    background-color: hsl(${color.h}, ${color.s}%, ${color.v}%);
  `}
`;

export default Card;
