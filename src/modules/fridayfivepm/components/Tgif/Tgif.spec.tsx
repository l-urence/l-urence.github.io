import {render, screen} from '@testing-library/react';
import React from 'react';

import {Tgif} from './Tgif';

jest.mock('../../models/Countdown');

describe('<Tgif />', () => {
  it('should render the tgif countdown', () => {
    render(<Tgif />);

    expect(screen.queryByTitle('Hours')).toHaveTextContent('05');
    expect(screen.queryByTitle('Minutes')).toHaveTextContent('02');
    expect(screen.queryByTitle('Seconds')).toHaveTextContent('03');
  });
});
