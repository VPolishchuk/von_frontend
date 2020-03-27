import * as R from 'ramda';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
// /////////////////////////////////////////////////////////////////////////////////////////////////
export * from './common';
import * as C from './constant';
// /////////////////////////////////////////////////////////////////////////////////////////////////
const fontPath = '../static/fonts';

export const GlobalStyles = createGlobalStyle`
  body, ul {
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
    font-family: RubikMedium, sans-serif;
  }

  @import url('https://fonts.googleapis.com/css?family=Lato|Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  
  a {
    color: inherit;
    text-decoration: none;
  }


  * :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

  li {
    list-style: none;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    background-color: ${C.white};
  }

  *::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #D3136D 0%, #F4892B 100%);
  }

  .fastco-emailSuggestions-2.fastco-emailSuggestion {
    display: none;
  }
  .fastco-floating-fab  {
    display: none;
  }


  @font-face {
    font-family: 'RobotoThin';
    src: url('${fontPath}/Roboto-Thin.eot');
    src: url('${fontPath}/Roboto-Thin.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-Thin.svg#Roboto-Thin') format('svg'),
      url('${fontPath}/Roboto-Thin.ttf') format('truetype'),
      url('${fontPath}/Roboto-Thin.woff') format('woff'),
      url('${fontPath}/Roboto-Thin.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoThinItalic';
    src: url('${fontPath}/Roboto-ThinItalic.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-ThinItalic.svg#Roboto-ThinItalic') format('svg'),
      url('${fontPath}/Roboto-ThinItalic.ttf') format('truetype'),
      url('${fontPath}/Roboto-ThinItalic.woff') format('woff'),
      url('${fontPath}/Roboto-ThinItalic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'RobotoLight';
    src: url('${fontPath}/Roboto-Light.eot');
    src: url('${fontPath}/Roboto-Light.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-Light.svg#Roboto-Light') format('svg'),
      url('${fontPath}/Roboto-Light.ttf') format('truetype'),
      url('${fontPath}/Roboto-Light.woff') format('woff'),
      url('${fontPath}/Roboto-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'RobotoRegular';
    src: url('${fontPath}/Roboto-Regular.eot');
    src: url('${fontPath}/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-Regular.svg#Roboto-Regular') format('svg'),
      url('${fontPath}/Roboto-Regular.ttf') format('truetype'),
      url('${fontPath}/Roboto-Regular.woff') format('woff'),
      url('${fontPath}/Roboto-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'RobotoMedium';
    src: url('${fontPath}/Roboto-Medium.eot');
    src: url('${fontPath}/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-Medium.svg#Roboto-Medium') format('svg'),
      url('${fontPath}/Roboto-Medium.ttf') format('truetype'),
      url('${fontPath}/Roboto-Medium.woff') format('woff'),
      url('${fontPath}/Roboto-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'RobotoBlackItalic';
    src: url('${fontPath}/Roboto-BlackItalic.eot');
    src: url('${fontPath}/Roboto-BlackItalic.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-BlackItalic.svg#Roboto-BlackItalic') format('svg'),
      url('${fontPath}/Roboto-BlackItalic.ttf') format('truetype'),
      url('${fontPath}/Roboto-BlackItalic.woff') format('woff'),
      url('${fontPath}/Roboto-BlackItalic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'RobotoBold';
    src: url('${fontPath}/Roboto-Bold.eot');
    src: url('${fontPath}/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/Roboto-Bold.svg#Roboto-Bold') format('svg'),
      url('${fontPath}/Roboto-Bold.ttf') format('truetype'),
      url('${fontPath}/Roboto-Bold.woff') format('woff'),
      url('${fontPath}/Roboto-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProMedium';
    src: url('${fontPath}/GothamProMedium.eot');
    src: url('${fontPath}/GothamProMedium.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/GothamProMedium.ttf') format('truetype'),
      url('${fontPath}/GothamProMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProBlackItalic';
    src: url('${fontPath}/GothamProBlackItalic.eot');
    src: url('${fontPath}/GothamProBlackItalic.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/GothamProBlackItalic.ttf') format('truetype'),
      url('${fontPath}/GothamProBlackItalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProBlack';
    src: url('${fontPath}/GothamProBlack.eot');
    src: url('${fontPath}/GothamProBlack.eot?#iefix') format('embedded-opentype'),
      url('${fontPath}/GothamProBlack.ttf') format('truetype'),
      url('${fontPath}/GothamProBlack.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const hoverStyles = css`
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBg }) => hoverBg};
    background: ${({ hoverBackground }) => hoverBackground};
    font-weight: ${({ hoverFontWeight }) => hoverFontWeight};
    background-size: ${({ hoverBackgroundSize }) => hoverBackgroundSize};
  }
`;
