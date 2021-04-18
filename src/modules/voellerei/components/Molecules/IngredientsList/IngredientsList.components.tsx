import {FC} from 'react';

import {List} from '../../Atoms/List';
import {ListItem} from '../../Atoms/ListItem';

interface Props {
  ingredients: ReadonlyArray<string>;
}

export const IngredientsList: FC<Props> = ({ingredients}) => (
  <List>
    {ingredients.map((ingredient, idx) => (
      <ListItem key={idx}>{ingredient}</ListItem>
    ))}
  </List>
);
