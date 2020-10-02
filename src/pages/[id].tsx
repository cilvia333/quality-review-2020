import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { ArticleData } from '~/data';

const Id: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<Info>();

  useEffect(() => {
    const article = _.get(ArticleData, `${id}`);
    if (article) {
      setItem(article);
    }
  }, [id]);

  return (
    <Wrapper>
      <ThumbnailWrapper>
        <ThumbnailImg src={require('images/di19551/thumbnail.png')} />
        <Profile>
          <IconImg src={require('images/di19551/icon.png')} />
          <Name>
            {item?.name ?? ''}
            <StudentId>@{item?.id ?? ''}</StudentId>
          </Name>
        </Profile>
      </ThumbnailWrapper>
      <ContentWrapper>
        <Description>{item?.description ?? ''}</Description>
        <Image src={require('images/di19551/icon.png')} />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${tw`relative pb-12`}
`;

const ThumbnailWrapper = styled.div`
  ${tw`relative w-full`}
  height: calc(100vh - 7.5rem);

  &::before {
    ${tw`absolute h-full w-full inset-0 bg-gray-800 z-10`}
    content: "";
    opacity: 0.4;
  }
`;

const ThumbnailImg = styled.img`
  ${tw`absolute h-full w-full object-cover inset-0`}
`;

const Profile = styled.div`
  ${tw`absolute p-12 flex items-center z-20 mx-auto`}
  max-width: 768px;
  bottom: 0;
  right: 0;
  left: 0;
`;

const IconImg = styled.img`
  ${tw`h-20 w-20 object-cover rounded-full`}
`;

const Name = styled.h2`
  ${tw`m-0 ml-8 text-4xl text-white font-bold leading-none`}
`;

const StudentId = styled.span`
  ${tw`ml-2 text-xl text-white font-bold leading-none`}
`;

const ContentWrapper = styled.div`
  ${tw`py-12 m-auto`}
  max-width: 768px;
`;

const Description = styled.div`
  ${tw`text-base `}
`;

const Image = styled.img`
  ${tw`w-full object-cover my-6`}
  height: 240px;
`;

export default Id;
