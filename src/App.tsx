import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import styled from "styled-components";
import React, { useState } from "react";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
	color: inherit;
}
* {
  box-sizing: border-box;
}
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 30px;
  margin: 10px auto;
  max-width: 480px;
`;
const DarkBtn = styled.button`
  font-size: 11px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  width: 45px;
  height: 20px;
  transition: color 0.1s ease-in;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
`;

function App() {
  const [isDark, setIsDark] = useState(true);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setIsDark(value === "Light" ? false : true);
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BtnContainer>
          <DarkBtn onClick={onClick} value={isDark ? "Light" : "Dark"}>
            {isDark ? "Light" : "Dark"}
          </DarkBtn>
        </BtnContainer>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
