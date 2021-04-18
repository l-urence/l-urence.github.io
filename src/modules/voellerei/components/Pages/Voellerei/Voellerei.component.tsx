import {useState, FC} from 'react';

import {getRecipeScraper} from '../../../gateways/RecipeScraper';
import {Recipe} from '../../../models';
import {Voellerei as VoellereiTemplate} from '../../Templates/Voellerei';

const scapeRecipe = getRecipeScraper();

export const Voellerei: FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const onScrape = async (url: string) => {
    const res = await scapeRecipe(url);
    setRecipe(res);
  };

  return <VoellereiTemplate recipe={recipe} onScrape={onScrape} />;
};
