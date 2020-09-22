import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, TextInputContainer } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <TextInputContainer>
        <FaSearch />
        <input type="text" placeholder='Search for a country...' />
      </TextInputContainer>


      <select name="region" id="region" defaultValue={0} >
        <option value="0" disabled hidden>Find by Region...</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="ocenia">Ocenia</option>
      </select>

    </Container>
  );
};

export default Search;
