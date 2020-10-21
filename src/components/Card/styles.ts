import styled from 'styled-components';

export const Container = styled.div`
 width: 250px;

 border-radius: 8px;
 overflow: hidden;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

 background: ${props => props.theme.colors.elements};

 margin-top: 1rem;

 div {
  width: 100%;
   height: 166px;
   overflow: hidden;
 }
 img {
   display: block;
   width: 100%;
   object-fit: cover;

 }
`;

export const Info = styled.div`
padding: 0.5rem 1rem;
  strong {
    font-size: 16px;
    display: block;
  }

  span {
    font-weight: 600
  }

  span, p {
    font-size: 12px;
  }

  p {
    display: block;
    margin-bottom: .2rem;
  }
`;
