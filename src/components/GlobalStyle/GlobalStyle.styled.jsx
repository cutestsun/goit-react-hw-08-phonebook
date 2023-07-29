import { createGlobalStyle } from 'styled-components';
import { colors } from '../../helpers/variables';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  background-color: ${colors.mainBgColor};
  color: #000;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

 *, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}
  
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #modal-root {
  isolation: isolate;
}
ol, ul {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit
}
`;
