import React, {FC} from 'react';

import {Burger} from './Burger';
import {Center} from './Center';

export const NotFound: FC = () => (
  <Center>
    <Burger text="404 - Page Not Found" />
  </Center>
);
