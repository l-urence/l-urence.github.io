import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {UrlInput} from '../../Atoms/UrlInput';
import {Button} from '../../Atoms/Button';

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

  return (
    <Wrapper onSubmit={onSubmit} method="">
      <UrlInput value={term} onChange={(e) => setTerm(e.target.value)} />
      <Button type="submit">Go</Button>
    </Wrapper>
  );
};
