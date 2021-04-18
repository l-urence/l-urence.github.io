interface RecipeProps {
  readonly title: string;
  readonly ingredients: ReadonlyArray<string>;
}

export class Recipe implements RecipeProps {
  readonly title;
  readonly ingredients;

  constructor(init: RecipeProps) {
    this.title = init.title;
    this.ingredients = init.ingredients;
  }
}
