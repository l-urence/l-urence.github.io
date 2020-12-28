import {render} from '@testing-library/react';
import {getNodeText} from '@testing-library/react';
import React from 'react';

import {Pad} from './Pad';

describe('<Pad />', () => {
  describe('given single diget numner', () => {
    it('should pad the number with a leading zero', () => {
      const {container} = render(<Pad input={3} />);
      expect(getNodeText(container)).toEqual('03');
    });
  });

  describe('given double digit number', () => {
    it('should show all digits with no leading zeros', () => {
      const {container} = render(<Pad input={42} />);
      expect(getNodeText(container)).toEqual('42');
    });
  });

  describe('given triple digit number', () => {
    it('should show all digits with no leading zeros', () => {
      const {container} = render(<Pad input={424} />);
      expect(getNodeText(container)).toEqual('424');
    });
  });
});
