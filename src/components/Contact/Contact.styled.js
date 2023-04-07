import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: auto;
  background-color: #2d76fc;
  color: white;
  &:hover {
    background: #bbbdbf;
  }
`;
