import _ from 'lodash';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { ArticleData } from '~/data';
import { Info } from '~/types';

const Id: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<Info>();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const article = _.get(ArticleData, `${id}`);
    if (article) {
      setItem(article);
    }
    setIsChecked(true);
  }, [id]);

  if (isChecked && !item) {
    return <Error statusCode={404} />;
  }

  return (
    <Wrapper>
      <Head>
        <title>QualityReview2020 | {item?.name ?? ''}</title>
        <meta property="description" content="" />
        <meta
          property="og:title"
          content={`QualityReview2020 | ${item?.name ?? ''}`}
        />
        <meta property="og:description" content="" />
        <meta
          property="og:url"
          content={`https://quality-review-2020.vercel.app/${id}`}
        />
        <meta
          property="og:image"
          content={`https://quality-review-2020.vercel.app/assets/${
            item?.name ?? ''
          }`}
        />
        <meta
          property="twitter:title"
          content={`QualityReview2020 | ${item?.name ?? ''}`}
        />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content={`https://quality-review-2020.vercel.app/assets/${
            item?.name ?? ''
          }`}
        />
      </Head>
      <ThumbnailWrapper>
        <ThumbnailImg src={id ? require(`images/${id}/thumbnail.png`) : ''} />
        <Profile>
          <IconImg src={id ? require(`images/${id}/icon.png`) : ''} />
          <Name>
            {item?.name ?? ''}
            <StudentId>@{item?.id ?? ''}</StudentId>
          </Name>
        </Profile>
      </ThumbnailWrapper>
      <ContentWrapper>
        <Description>{item?.description ?? ''}</Description>
        <Image src={id ? require(`images/${id}/icon.png`) : ''} />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${tw`relative pb-12`}
`;

const ThumbnailWrapper = styled.div`
  ${tw`relative w-full`}
  height: 100vh;

  &::before {
    ${tw`absolute h-full w-full inset-0 bg-gray-800`}
    content: "";
    opacity: 0.4;
    z-index: 1;
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
  ${tw`ml-2 text-base text-white leading-none`}
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
