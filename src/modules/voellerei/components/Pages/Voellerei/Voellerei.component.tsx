import {FC, useState} from 'react';

import {Voellerei as VoellereiTemplate} from '../../Templates/Voellerei';
import {Recipe} from '../../../models';
import {getRecipeScraper} from '../../../gateways/RecipeScraper';

const scapeRecipe = getRecipeScraper();

export const Voellerei: FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const onScrape = async (url: string) => {
    const recipe = await scapeRecipe(url);
    setRecipe(recipe);
  };

  return <VoellereiTemplate recipe={recipe} onScrape={onScrape} />;
};
