import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 4rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 4rem;
  margin-top: 2rem;

  place-content: center;
`;
