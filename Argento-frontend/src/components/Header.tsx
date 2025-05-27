import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #2a2a2a;
  padding: 15px;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(NavLink)`
  color: #ffd700;
  font-weight: 600;
  &.active {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/dashboard">AI Dashboard</StyledLink>
      <StyledLink to="/capital">Capital</StyledLink>
      <StyledLink to="/exchange">Exchange</StyledLink>
    </Nav>
  );
}

export default Header;