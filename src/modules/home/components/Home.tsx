import React, {FC} from 'react';

import {Burger} from './Burger';
import {Center} from './Center';
import {Links} from './Links';

export const Home: FC = () => (
  <>
    <Center>
      <Burger />
    </Center>
    <Links />
  </>
);
