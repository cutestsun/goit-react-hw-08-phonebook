import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: ${props => (props.showLine ? '2px solid black' : 'none')};

  @media screen and (max-width: 1439.98px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media screen and (max-width: 1023.98px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media screen and (max-width: 767.98px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
