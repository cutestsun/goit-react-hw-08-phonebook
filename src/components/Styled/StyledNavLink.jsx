import { transition } from 'helpers/variables';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: block;
  letter-spacing: 0.25px;
  line-height: 1.2;
  transition: transform ${transition}, text-shadow ${transition};
  white-space: nowrap;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    text-shadow: 0px 6px 5px #383d1c;
  }

  @media screen and (max-width: 1023.98px) {
    font-size: 23px;
  }
  @media screen and (max-width: 767.98px) {
    font-size: 21px;
  }
`;
