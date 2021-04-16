import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box
}
body {
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.colorBackground};
  color: ${({ theme }) => theme.palette.colorText};
  transition: all 0.3s ease-in;
}

html, body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

ol, ul {
  list-style: none;
}

a{
  text-decoration:none;
  color: ${({ theme }) => theme.palette.colorText}
}
a:hover{
  color: ${({ theme }) => theme.palette.colorPrimary}
}

a:focus{
  outline: 2px solid ${({ theme }) => theme.palette.colorPrimary}
}

button:focus, input[type="search"]:focus{     
  outline: 2px solid ${({ theme }) => theme.palette.colorPrimary};
}
`;

export default GlobalStyles;
