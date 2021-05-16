import {FC} from 'react';
import styled from 'styled-components';

import {ReactComponent as OpenSvg} from './assets/open.svg';

const GITHUB_URL = '//github.com';

const Link = styled.a`
  color: #b4b4b4;
  text-decoration: none;
`;

interface Props {
  repo: string;
  user: string;
}

export const GitHubLink: FC<Props> = ({repo, user}) => {
  return (
    <Link href={`${GITHUB_URL}/${user}/${repo}`} target="_blank">
      GitHub <OpenSvg />
    </Link>
  );
};
