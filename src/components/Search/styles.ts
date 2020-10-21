import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 1rem;


  select {
    border: none;
    background: ${props => props.theme.colors.elements};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    color:  ${props => props.theme.colors.text};

    width: 10rem;
    padding: 1rem 1rem;
  }
`;

export const TextInputContainer = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  input {
    border: none;
    margin-left: .5rem;
  }
`;
