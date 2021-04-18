import {Recipe} from '../../../models';
import {RecipeScraper} from '../RecipeScraper';
import {data} from './recipe.json';

const mockScrapeRecipe = jest.fn(() => Promise.resolve(new Recipe(data)));
export function getRecipeScraper(): RecipeScraper {
  return mockScrapeRecipe;
}
