import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  table-layout: fixed;
  display: table;
  height: 90%;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Center: FC = ({children}) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);
