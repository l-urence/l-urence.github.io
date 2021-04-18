import {Recipe} from '../../../models';
import {data} from './recipe.json';
import {RecipeScraper} from '../RecipeScraper';

const mockScrapeRecipe = jest.fn(() => Promise.resolve(new Recipe(data)));
export function getRecipeScraper(): RecipeScraper {
  return mockScrapeRecipe;
}
