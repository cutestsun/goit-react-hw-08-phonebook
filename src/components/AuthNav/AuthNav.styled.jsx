import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 84px;
  @media screen and (max-width: 1023.98px) {
    column-gap: 60px;
  }
  @media screen and (max-width: 767.98px) {
    column-gap: 32px;
  }
`;
