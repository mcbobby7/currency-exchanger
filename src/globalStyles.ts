import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0B0C10;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #root {
    background-color: #1F2833;
    width: 100vw;
    max-width: 1200px;
    min-height: 100vh;
  }
  select {

    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    width: 150px;
    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    @media only screen and (max-width: 500px) {
      width: 100px;
      
    }
}

select.round {
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        radial-gradient(#ddd 70%, transparent 72%);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - .5em) .5em;
    background-size:
        5px 5px,
        5px 5px,
        1.5em 1.5em;
    background-repeat: no-repeat;
    }

    select.round:focus {
    background-image:
        linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        radial-gradient(gray 70%, transparent 72%);
    background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        calc(100% - .5em) .5em;
    background-size:
        5px 5px,
        5px 5px,
        1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
    }

`

export default GlobalStyle
