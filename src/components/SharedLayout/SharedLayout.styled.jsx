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
`;
