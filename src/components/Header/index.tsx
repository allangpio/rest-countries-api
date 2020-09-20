import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FaRegMoon, FaMoon } from 'react-icons/fa'

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container onClick={toggleTheme}>
      <h1>Where in the world?</h1>
      <div>
        {title === 'light' ? <FaRegMoon /> : <FaMoon />}

        <p>Dark Mode</p>
      </div>
    </Container>
  )
}

export default Header;
