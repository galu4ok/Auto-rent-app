import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SiteHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;
export const Navigation = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: red;
  }
`;
