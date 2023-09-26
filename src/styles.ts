import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  red: '#E66767',
  lightCream: '#FFF8F2',
  white: '#fff',
  cream: '#FFEBD9'
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${color.lightCream};
    color: ${color.red}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  h4 {
    font-size: 16px;
    font-weight: 900;
  }

  a {
    text-decoration: none;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  cursor: pointer;
`

export default Global
