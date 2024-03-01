import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    background-color: #ecffff;
    font-family: cursive;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  object-fit: cover;
}
input{
  font-size: revert;
}
h1,h2,h3,h4,h5{
  margin: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}`;
export default GlobalStyles;
