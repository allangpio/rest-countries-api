import React, { useState, useEffect } from 'react';

import { useCountry } from '../../hooks/countries';

import { Container, CountrieContainer, Flag, InfoContainer, Detail, LeftDetail, RightDetail } from './styles';
import { RouteComponentProps, Link } from 'react-router-dom';

interface CountrieProps {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  numericCode: string;
  alpha3Code: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[];
}

interface MatchParams {
  name: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

const Details: React.FC<Props> = ({ match }) => {
  const [loading, setLoading] = useState(false)
  const { getByName } = useCountry();
  const [countrie, setCountrie] = useState({} as CountrieProps);


  useEffect(() => {
    (async function getCountries() {
      setLoading(true);
      const countrieFromApi = await getByName(match.params.name);
      setCountrie(countrieFromApi);
      setLoading(false);
    })();
  }, [getByName, match.params.name])

  return (
    <Container>
      <Link to='/'>&larr; Back</Link>
      {loading ? (<h1>Loading</h1>) : (
        <CountrieContainer>
          <Flag>
            <img src={countrie.flag} alt={`${countrie.name} flag`} />
          </Flag>
          <InfoContainer>
            <h3>{countrie.name}</h3>
            <Detail>
              <LeftDetail>
                <p><strong>Native Name:</strong> {countrie.nativeName} </p>
                <p><strong>Population:</strong> {countrie.population}</p>
                <p><strong>Region:</strong> {countrie.region}</p>
                <p><strong>Sub Region:</strong> {countrie.subregion} </p>
                <p><strong>Capital:</strong> {countrie.capital}</p>
              </LeftDetail>

              <RightDetail>
                <p><strong>Top Level Domain:</strong>  {countrie.topLevelDomain && countrie.topLevelDomain.map(item => item).slice().join(', ')}  </p>
                <p><strong>Currencies:</strong> {countrie.currencies && countrie.currencies.map(currencie => currencie.name).slice().join(', ')} </p>
                <p><strong>Languages:</strong> {countrie.languages && countrie.languages.map(language => language.name).slice().join(', ')}  </p>
              </RightDetail>
            </Detail>

            <p><strong>Border Countries:</strong> {countrie.borders && countrie.borders.map(border => (
              <Link to={`/detail/${border}`} key={border}>
                {border}
              </Link>
            ))} </p>

          </InfoContainer>
        </CountrieContainer>
      )}

      {/* <CardsContainer>
        {!loading ? <h1>Loading</h1> : (filteredCountries.map(countrie => (
          <Card key={countrie.numericCode} name={countrie.name} flag={countrie.flag} region={countrie.region} population={countrie.population} capital={countrie.capital} />
        )))}
      </CardsContainer> */}
    </Container>
  );
}

export default Details;
