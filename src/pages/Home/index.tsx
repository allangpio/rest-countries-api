import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Search from '../../components/Search';
import Card from '../../components/Card';

import { Container, CardsContainer } from './styles';

interface CountrieProps {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  numericCode: string;
}

const Home: React.FC = () => {
  const [countries, setCountries] = useState<CountrieProps[]>({} as CountrieProps[]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function getCountries() {
      const response = await api.get('/all');
      setCountries(response.data);
      setLoading(true);
    })();
  }, [])

  return (
    <Container>
      <Search />
      <CardsContainer>
        {!loading ? <h1>Loading</h1> : (countries.map(countrie => (
          <Card key={countrie.numericCode} name={countrie.name} flag={countrie.flag} region={countrie.region} population={countrie.population} capital={countrie.capital} />
        )))}
      </CardsContainer>
    </Container>
  );
}

export default Home;
