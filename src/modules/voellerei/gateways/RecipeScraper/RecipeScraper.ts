import {Recipe} from '../../models';
import {scrapeRecipe} from './rest';

export type RecipeScraper = (url: string) => Promise<Recipe>;

export function getRecipeScraper(): RecipeScraper {
  return scrapeRecipe;
}
