import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      /* background: black; */
      background-image: url(https://i.pinimg.com/originals/61/3d/e7/613de7121e42fbd8788cd7d32dbf7efc.jpg);
      
      object-fit: cover;
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
`;
