import _ from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import Heart from '..//assets/svgs/heart.svg';
import HeartOutline from '..//assets/svgs/heart_outline.svg';

import { ArticleData } from '~/data';
import { HSV, Info } from '~/types';
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
  const [item, setItem] = useState<Info>();

  useEffect(() => {
    const article = _.get(ArticleData, `${id}`);
    if (article) {
      setItem(article);
    }
  }, [id]);

  useEffect(() => {
    if (!item) {
      return;
    }

    const [h, s, v] = rgb2hsv([
      item.color?.r ?? 0,
      item.color?.g ?? 0,
      item.color?.b ?? 0,
    ]);

    for (let i = 0; i < 6; i++) {
      const converedS = (s / 5) * i;
      const converedV = 100 - (v / 5) * i;
      colors.push({ h, s: converedS, v: converedV });
    }

    for (let i = 0; i < 168; i++) {
      tileColors.push(colors[Math.floor(Math.random() * Math.floor(6))]);
    }
  }, [item]);

  return (
    <Wrapper>
      <PostWrapper>
        <IconImg src={require('images/di19551/icon.png')} />
        <ContentWrapper>
          <Name>
            {item?.name ?? ''}
            <Id>@{item?.id ?? ''}</Id>
          </Name>
          <Description>{item?.description ?? ''}</Description>
          <ReadMore>
            <Link href={'/[id]'} as={`${id}`}>
              read more ...
            </Link>
          </ReadMore>
          <Link href={'/[id]'} as={`${id}`}>
            <ThumbnailWrapper>
              <ThumbnailImg src={require('images/di19551/thumbnail.png')} />
            </ThumbnailWrapper>
          </Link>
        </ContentWrapper>
      </PostWrapper>
      <ButtonWrapper>
        <StyledHeartOutline
          isActive={!clicked}
          onClick={() => isClicked(true)}
        />
        <StyledHeart isActive={clicked} />
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
  ${tw`p-8 flex items-start`}
`;

const IconImg = styled.img`
  ${tw`h-12 w-12 object-cover rounded-full`}
`;

const ContentWrapper = styled.div`
  ${tw`pb-4 pl-4`}
`;

const Name = styled.h2`
  ${tw`m-0 text-xl font-bold leading-none`}
`;

const Id = styled.span`
  ${tw`ml-2 text-sm text-gray-600 font-bold leading-none`}
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

const StyledHeartOutline = styled(HeartOutline)<{ isActive: boolean }>`
  ${tw`absolute h-full w-full transition-all duration-500 ease-in-out cursor-pointer opacity-0`}

  stroke-width: 2px;
  transform: scale(1);

  ${({ isActive }) =>
    isActive &&
    css`
      ${tw`opacity-100`}
    `}
`;

const StyledHeart = styled(Heart)<{ isActive: boolean }>`
  ${tw`absolute h-full w-full transition-all duration-300 ease-in-out cursor-pointer fill-current text-red-500 opacity-0`}

  stroke-width: 2px;
  transform: scale(0.1);

  ${({ isActive }) =>
    isActive &&
    css`
      ${tw`opacity-100`}
      transform: scale(1);
    `}
`;

const ButtonWrapper = styled.div`
  ${tw`absolute h-8 w-8 z-10`}
  bottom: 3rem;
  right: 1rem;
  &:hover {
    ${StyledHeartOutline} {
      transform: scale(1.2);
    }
  }
`;

const Footer = styled.div`
  ${tw`flex flex-wrap`}
  height: 40px;
  bottom: -40px;
`;

const BGTile = styled.div<{ color: HSV }>`
  ${tw`relative bg-gray-500`}
  height: 10px;
  width: 10px;

  ${({ color }) => css`
    background-color: hsl(${color.h}, ${color.s}%, ${color.v}%);
  `}
`;

export default Card;
