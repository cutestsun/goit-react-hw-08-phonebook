import { StyledNavLink } from 'components/Styled/StyledNavLink';
import { Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Wrapper>
  );
};
