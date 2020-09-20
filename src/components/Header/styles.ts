import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
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
