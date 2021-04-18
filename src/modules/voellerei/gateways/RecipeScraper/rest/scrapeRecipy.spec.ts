import {scrapeRecipe} from './scrapeRecipe';
import {data} from '../__moks__/recipe.json';

const windowSpy = jest.spyOn(window, 'fetch');

describe('scrapeRecipe', () => {
  beforeEach(() => {
    windowSpy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(data),
    } as Response);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should map the recipe', async () => {
    const url = 'https://example.com';
    const recipe = scrapeRecipe(url);
    await expect(recipe).resolves.toEqual({
      title: data.title,
      ingredients: data.ingredients,
    });
  });
});
