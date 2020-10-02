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
    <Title>
      {item?.id ?? ''}
      {item?.description ?? ''}
    </Title>
  );
};

const Title = styled.h1`
  ${tw`text-red-500`}
`;

export default Id;
