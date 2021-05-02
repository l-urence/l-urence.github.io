import {FC} from 'react';
import styled from 'styled-components';

import {List} from '../../Atoms/List';
import {ListItem} from '../../Atoms/ListItem';

const StyledList = styled(List)`
  list-style-type: none;
  text-align: left;
`;

interface Props {
  ingredients: ReadonlyArray<string>;
}

export const IngredientsList: FC<Props> = ({ingredients}) => (
  <StyledList>
    {ingredients.map((ingredient, idx) => (
      <ListItem key={idx}>{ingredient}</ListItem>
    ))}
  </StyledList>
);
