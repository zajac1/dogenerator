import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import DeckerFont from "./fonts/Decker.ttf";
// @ts-ignore
import DeckerFontBold from "./fonts/DeckerB.ttf";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Decker";
    src: url(${DeckerFont}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "DeckerBold";
    src: url(${DeckerFontBold}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  * {
    font-family: "Decker";
    color: #043339;
    transition: all .2s ease-in-out;
  }

  body {
    margin: 12px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  text-align: center;
`;

export const MainContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;
