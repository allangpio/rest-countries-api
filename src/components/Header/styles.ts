import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 1rem 4rem;

  @media screen and (max-width: 600px)  {
    padding: 1rem 2rem;
  }

  background: ${props => props.theme.colors.elements};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;

    @media screen and (max-width: 600px)  {
      font-size: 1rem;
    }

  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      margin-left: 0.5rem;
      font-weight: 600;
    }
  }
`;
