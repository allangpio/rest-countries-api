import React, { useCallback } from 'react';
import { useCountry } from '../../hooks/countries';
import { FaSearch } from 'react-icons/fa';

import { Container, TextInputContainer } from './styles';

const Search: React.FC = () => {

  const { filterCountries, filterByRegion } = useCountry();
  const handleInput = useCallback((e) => {
    filterCountries(e.target.value)
  }, [filterCountries])

  const handleSelect = useCallback((e) => {
    console.log(e.target.value)
    filterByRegion(e.target.value)
  }, [filterByRegion])

  return (
    <Container>
      <TextInputContainer>
        <FaSearch />
        <input type="text" onChange={handleInput} placeholder='Search for a country...' />
      </TextInputContainer>


      <select name="region" id="region" defaultValue={"none"} onChange={handleSelect} >
        <option value="none">Find by Region...</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Ocenia</option>
      </select>

    </Container>
  );
};

export default Search;
