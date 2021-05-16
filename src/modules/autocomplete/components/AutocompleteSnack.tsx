import React, {FC} from 'react';
import styled from 'styled-components';

import {GitHubLink} from './GitHubLink';
import {Snack} from './Snack';

const Center = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10%;
`;

const Content = styled.article`
  flex: 1;
`;

const GitHubWrapper = styled.div`
  text-align: right;
  padding: 10px;
`;

export const AutocompleteSnack: FC = () => {
  return (
    <Center>
      <Content>
        <Snack snackId="@mrlaessig/rn-autocomplete-input-example" />
        <GitHubWrapper>
          <GitHubLink user="mrlaessig" repo="react-native-autocomplete-input" />
        </GitHubWrapper>
      </Content>
    </Center>
  );
};
