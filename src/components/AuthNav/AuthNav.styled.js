import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavWrapper = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  gap: 30px;
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
