import React, {useState, FC} from 'react';
import styled from 'styled-components';

import {Button} from '../../Atoms/Button';
import {UrlInput} from '../../Atoms/UrlInput';

const Wrapper = styled.form``;

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
      <UrlInput value={term} onChange={onChange} />
      <Button type="submit">Go</Button>
    </Wrapper>
  );
};
