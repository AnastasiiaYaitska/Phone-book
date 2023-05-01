import styled from 'styled-components';
import { Container } from '@mui/material';

export const FormWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: white;
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  height: 30px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  /* ${Input}:focus + & {
    color: #075bf7;
  } */
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #075bf7;
  color: white;
  &:hover {
    background-color: #2d76fc;
  }
`;
