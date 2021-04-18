import {Recipe} from '../../../models';
import {RecipeScraper} from '../RecipeScraper';

const API = process.env.REACT_APP_SCRAPE_API ?? '';

export const scrapeRecipe: RecipeScraper = async (url) =>
  fetch(API, {
    method: 'post',
    body: JSON.stringify({url}),
  })
    .then((r) => r.json())
    .then((recipeJson) => new Recipe(recipeJson));
