import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 4rem;
  display: grid;
  place-content: center;

  & > a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CountrieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 310px;
  margin-top: 2rem;


  @media screen and (min-width: 1050px)  {
    justify-content: center;
    align-items: center;
  }


`;

export const Flag = styled.div`
  overflow: hidden;
  max-width: 400px;

  margin-bottom: 2rem;

  @media screen and (min-width: 1020px)  {
    margin-right: 2rem;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`


  h3 {
    margin-bottom: 2rem;
  }

  a {
    padding: .25rem .75rem;
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 8px;

    background:  ${props => props.theme.colors.elements};
    text-decoration: none;
    color: inherit;
    &:not(:last-of-type) {
      margin-right: .4rem;
    }
  }

  & > p {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  strong {
    margin-right: .25rem;
  }

`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    margin-bottom: 0.5rem;
  }



`;
export const LeftDetail = styled.div`

`;
export const RightDetail = styled.div`

`;
