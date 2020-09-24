import React, { useState, useEffect } from 'react';

import { useCountry } from '../../hooks/countries';
import Search from '../../components/Search';
import Card from '../../components/Card';

import { Container, CardsContainer } from './styles';

// interface CountrieProps {
//   name: string;
//   flag: string;
//   region: string;
//   population: number;
//   capital: string;
//   numericCode: string;
// }

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const { filteredCountries, getAllCountries } = useCountry();
  useEffect(() => {
    (async function getCountries() {
      getAllCountries();
      setLoading(true);
    })();
  }, [])

  return (
    <Container>
      <Search />
      <CardsContainer>
        {!loading ? <h1>Loading</h1> : (filteredCountries.map(countrie => (
          <Card key={countrie.numericCode} name={countrie.name} flag={countrie.flag} region={countrie.region} population={countrie.population} capital={countrie.capital} />
        )))}
      </CardsContainer>
    </Container>
  );
}

export default Home;
