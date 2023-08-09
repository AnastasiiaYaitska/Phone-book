import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html{
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
    background-image: url(./phonebook.jpeg);
    /* background-position: center; */
     background-size: cover;
      /* background: black; */
        /* backdrop-filter: blur(5px); */
        width: 100%;
        height: 100%;
/* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); */
/* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1  {
  margin-top  :40px ;
  }
  h2 {
    margin-top: 20px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
   /* main{    
  backdrop-filter: blur(5px);
  width: 100%;
} */
`;
