import React, {useState, FC} from 'react';
import styled from 'styled-components';

import {Button} from '../../Atoms/Button';
import {Input} from '../../Atoms/Input';

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SearchInput = styled(Input)`
  margin: 0 5px;
  flex: 1;
`;

interface Props {
  onSearch: (term: string) => void;
}

export const SearchBar: FC<Props> = ({onSearch}) => {
  const [term, setTerm] = useState('');

  function onSubmit(e: React.FormEvent) {
    onSearch(term);
    e.preventDefault();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  return (
    <Wrapper onSubmit={onSubmit} method="">
      <SearchInput value={term} onChange={onChange} />
      <Button type="submit">Go</Button>
    </Wrapper>
  );
};
