import {FC} from 'react';
import styled from 'styled-components';

import {Recipe} from '../../../models';
import {ShoppingListCreator} from '../../Organisms/ShoppingListCreator';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

interface Props {
  recipe: Recipe | null;
  onScrape: (url: string) => void;
  onShare: (recipe: Recipe) => void;
}

export const Voellerei: FC<Props> = ({recipe, onScrape, onShare}) => (
  <Wrapper>
    <ShoppingListCreator recipe={recipe} onScrape={onScrape} onShare={onShare} />
  </Wrapper>
);
