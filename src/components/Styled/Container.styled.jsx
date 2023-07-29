import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 320px;
  max-width: 414px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 920px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1200px;
  }
`;
