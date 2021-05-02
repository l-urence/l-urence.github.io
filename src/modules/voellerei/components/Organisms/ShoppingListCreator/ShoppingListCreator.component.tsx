import {FC} from 'react';
import styled from 'styled-components';

import {Recipe} from '../../../models';
import {Button} from '../../Atoms/Button';
import {IngredientsList} from '../../Molecules/IngredientsList';
import {SearchBar} from '../../Molecules/SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RecipeWrapper = styled.div``;

interface Props {
  recipe: Recipe | null;
  onScrape: (url: string) => void;
  onShare: (recipe: Recipe) => void;
}

export const ShoppingListCreator: FC<Props> = ({onScrape, onShare, recipe}) => {
  const handleShare = () => recipe && onShare(recipe);
  return (
    <Wrapper>
      <SearchBar onSearch={onScrape} />
      {recipe && (
        <RecipeWrapper>
          <h1>{recipe.title}</h1>
          <IngredientsList ingredients={recipe.ingredients} />
        </RecipeWrapper>
      )}
      {recipe && <Button onClick={handleShare}>Export</Button>}
    </Wrapper>
  );
};
