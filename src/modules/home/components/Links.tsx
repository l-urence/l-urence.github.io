import React, {FC} from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  &:after {
    margin: 5px;
    content: '|';
  }

  &:last-child:after {
    content: none;
  }
`;

const Link = styled.a`
   color:#333;
   text-translateX(2px);
   text-decoration:none
`;

export const Links: FC = () => (
  <List>
    <ListItem>
      <Link href="mailto:cheese@byteburgers.com">cheese@byteburgers.com</Link>
    </ListItem>
    <ListItem>
      <Link href="cheese@byteburgers.com.asc">Pub-Key: 8B0E5F0E</Link>
    </ListItem>
    <ListItem>
      <Link href="https://github.com/mrlaessig">GitHub</Link>
    </ListItem>
  </List>
);
