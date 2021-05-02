import {FC} from 'react';
import styled from 'styled-components';

import {Recipe} from '../../../models';
import {IngredientsList} from '../../Molecules/IngredientsList';
import {SearchBar} from '../../Molecules/SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  recipe: Recipe | null;
  onScrape: (url: string) => void;
}

export const ShoppingListCreator: FC<Props> = ({onScrape, recipe}) => (
  <Wrapper>
    <SearchBar onSearch={onScrape} />
    {recipe && (
      <>
        <h1>{recipe.title}</h1>
        <IngredientsList ingredients={recipe.ingredients} />
      </>
    )}
  </Wrapper>
);
