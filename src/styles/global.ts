import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  background: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  font-weight: 400;
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
}

button{
  cursor: pointer;
  border: none;

}

a{
  text-decoration: none; 
}

/* removendo comportamento e estilo padrão do input number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]{
  -moz-appearance: textfield;
}
`
