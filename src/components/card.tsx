import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Info } from '~/types/info';

interface Props {
  info: Info;
}

const Card: React.FC<Props> = (props) => {
  const { info } = props;
  return <Wrapper>{info.id}</Wrapper>;
};

const Wrapper = styled.div`
  ${tw`m-4`}
`;

export default Card;
