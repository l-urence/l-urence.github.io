import React, {FC} from 'react';
import {Link} from 'react-router-dom';
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

const linkStyle = `
   color:#333;
   text-translateX(2px);
   text-decoration:none
`;

const GreyRouterLink = styled(Link)`
  ${linkStyle}
`;

const GreyLink = styled.a`
  ${linkStyle}
`;

export const Links: FC = () => (
  <List>
    <ListItem>
      <GreyLink href="mailto:cheese@byteburgers.com">cheese@byteburgers.com</GreyLink>
    </ListItem>
    <ListItem>
      <GreyLink href="cheese@byteburgers.com.asc">Pub-Key: 8B0E5F0E</GreyLink>
    </ListItem>
    <ListItem>
      <GreyLink href="https://github.com/mrlaessig">GitHub</GreyLink>
    </ListItem>
    <ListItem>
      <GreyRouterLink to="/tgif">tgif</GreyRouterLink>
    </ListItem>
    <ListItem>
      <GreyRouterLink to="/autocomplete">rn-autocomplete</GreyRouterLink>
    </ListItem>
  </List>
);
