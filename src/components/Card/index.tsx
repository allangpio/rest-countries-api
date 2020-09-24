import React from 'react';


import { Container, Info } from './styles';

interface CountrieProps {

  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;


}

const Card: React.FC<CountrieProps> = ({ name, flag, region, population, capital }: CountrieProps) => {
  return (
    <Container>
      <img src={flag} alt={`${name} flag`} />
      <Info>
        <strong>{name}</strong> <br />
        <p><span>Population: </span> {population}</p>
        <p><span>Region: </span> {region}</p>
        <p><span>Capital: </span>{capital}</p>
      </Info>


    </Container>);
}

export default Card;
