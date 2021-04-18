import {RecipeScraper} from '../RecipeScraper';
import {Recipe} from '../../../models';

const API = process.env.REACT_APP_SCRAPE_API ?? '';

export const scrapeRecipe: RecipeScraper = async (url) =>
  fetch(API, {
    method: 'post',
    body: JSON.stringify({url}),
  })
    .then((r) => r.json())
    .then((recipeJson) => new Recipe(recipeJson));
