import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
