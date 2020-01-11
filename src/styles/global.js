import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #F6F6F6;
    font-family: Montserrat;
    font-style: normal;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
  }

  button{
    border: none;
    cursor: pointer;
  }



`

export default GlobalStyle
