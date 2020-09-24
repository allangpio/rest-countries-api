import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface CountryState {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  numericCode: string;
}

interface CountryContextData {
  countries: CountryState[];
  filteredCountries: CountryState[];
  getAllCountries(): Promise<void>;
  filterCountries(name: string): void;
  filterByRegion(region: string): void;
}

const CountryContext = createContext<CountryContextData>({} as CountryContextData);

export const CountryProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<CountryState[]>([] as CountryState[]);
  const [filteredCountries, setFilteredCountries] = useState<CountryState[]>([] as CountryState[]);

  const getAllCountries = useCallback(async () => {
    const response = await api.get('/all');
    setCountries(response.data);
    setFilteredCountries(response.data);
  }, []);

  const filterCountries = useCallback((name: string) => {
    const searchedCountries = countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
    setFilteredCountries(searchedCountries);
  }, [countries]);

  const filterByRegion = useCallback((region: string) => {
    const searchedCountries = countries.filter(country => country.region.toLowerCase() === region.toLowerCase())
    region === "none" ? setFilteredCountries(countries) : setFilteredCountries(searchedCountries);
  }, [countries])

  return (
    <CountryContext.Provider value={{ countries: countries, filteredCountries, getAllCountries, filterCountries, filterByRegion }}>
      {children}
    </CountryContext.Provider>
  );
};

export function useCountry(): CountryContextData {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('useCountry must be used within an CountryProvider');
  }

  return context;
}

