import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  &&:hover {
    color: black;
  }
`;
