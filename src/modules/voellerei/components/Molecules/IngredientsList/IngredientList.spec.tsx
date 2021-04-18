import {IngredientsList} from './IngredientsList.components';
import {render, screen, within} from '@testing-library/react';

describe('<IngredientList />', () => {
  it('should render a list if ingredients', () => {
    const ingredients = ['Tomatoes', 'Paprika', 'Onions'];
    render(<IngredientsList ingredients={ingredients} />);

    expect(screen.getByRole('list')).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(ingredients.length);

    items.forEach((item, idx) => {
      const {getByText} = within(item);
      expect(getByText(ingredients[idx])).toBeInTheDocument();
    });
  });
});
