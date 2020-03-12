import * as R from 'ramda';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import {
  top,
  left,
  flex,
  size,
  color,
  space,
  order,
  width,
  right,
  height,
  bottom,
  border,
  zIndex,
  opacity,
  display,
  gridGap,
  gridRow,
  position,
  fontSize,
  flexWrap,
  overflow,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  textAlign,
  boxShadow,
  borderTop,
  alignSelf,
  fontFamily,
  gridColumn,
  background,
  alignItems,
  lineHeight,
  fontWeight,
  borderLeft,
  borderRight,
  borderBottom,
  borderRadius,
  gridAutoRows,
  letterSpacing,
  flexDirection,
  justifyContent,
  backgroundSize,
  backgroundImage,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns } from 'styled-system';
// constants
// import * as C from '../constants'
// helpers
// import * as H from '../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////
export * from './common';
// /////////////////////////////////////////////////////////////////////////////////////////////////
const fontPath = '../public/fonts';

export const GlobalStyle = createGlobalStyle`
  body, ul {
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Lato|Rubik&display=swap');
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
  }

  *::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

  *::-webkit-scrollbar-thumb {
    background-color: lightblue;
  }

  @font-face {
    font-family: 'Roboto-Thin';
    src: url('#{${fontPath}}/Roboto-Thin.eot');
    src: url('#{${fontPath}}/Roboto-Thin.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-Thin.svg#Roboto-Thin') format('svg'),
      url('#{${fontPath}}/Roboto-Thin.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-Thin.woff') format('woff'),
      url('#{${fontPath}}/Roboto-Thin.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-ThinItalic';
    src: url('#{${fontPath}}/Roboto-ThinItalic.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-ThinItalic.svg#Roboto-ThinItalic') format('svg'),
      url('#{${fontPath}}/Roboto-ThinItalic.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-ThinItalic.woff') format('woff'),
      url('#{${fontPath}}/Roboto-ThinItalic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Roboto-Light';
    src: url('#{${fontPath}}/Roboto-Light.eot');
    src: url('#{${fontPath}}/Roboto-Light.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-Light.svg#Roboto-Light') format('svg'),
      url('#{${fontPath}}/Roboto-Light.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-Light.woff') format('woff'),
      url('#{${fontPath}}/Roboto-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('#{${fontPath}}/Roboto-Regular.eot');
    src: url('#{${fontPath}}/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-Regular.svg#Roboto-Regular') format('svg'),
      url('#{${fontPath}}/Roboto-Regular.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-Regular.woff') format('woff'),
      url('#{${fontPath}}/Roboto-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Roboto-Medium';
    src: url('#{${fontPath}}/Roboto-Medium.eot');
    src: url('#{${fontPath}}/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-Medium.svg#Roboto-Medium') format('svg'),
      url('#{${fontPath}}/Roboto-Medium.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-Medium.woff') format('woff'),
      url('#{${fontPath}}/Roboto-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Roboto-BlackItalic';
    src: url('#{${fontPath}}/Roboto-BlackItalic.eot');
    src: url('#{${fontPath}}/Roboto-BlackItalic.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-BlackItalic.svg#Roboto-BlackItalic') format('svg'),
      url('#{${fontPath}}/Roboto-BlackItalic.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-BlackItalic.woff') format('woff'),
      url('#{${fontPath}}/Roboto-BlackItalic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('#{${fontPath}}/Roboto-Bold.eot');
    src: url('#{${fontPath}}/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/Roboto-Bold.svg#Roboto-Bold') format('svg'),
      url('#{${fontPath}}/Roboto-Bold.ttf') format('truetype'),
      url('#{${fontPath}}/Roboto-Bold.woff') format('woff'),
      url('#{${fontPath}}/Roboto-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProMedium';
    src: url('#{${fontPath}}/GothamProMedium.eot');
    src: url('#{${fontPath}}/GothamProMedium.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/GothamProMedium.ttf') format('truetype'),
      url('#{${fontPath}}/GothamProMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProBlackItalic';
    src: url('#{${fontPath}}/GothamProBlackItalic.eot');
    src: url('#{${fontPath}}/GothamProBlackItalic.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/GothamProBlackItalic.ttf') format('truetype'),
      url('#{${fontPath}}/GothamProBlackItalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'GothamProBlack';
    src: url('#{${fontPath}}/GothamProBlack.eot');
    src: url('#{${fontPath}}/GothamProBlack.eot?#iefix') format('embedded-opentype'),
      url('#{${fontPath}}/GothamProBlack.ttf') format('truetype'),
      url('#{${fontPath}}/GothamProBlack.woff') format('woff');
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

// export const createMinWithMediaQuery = n => `
//   @media screen and (min-width: ${n}px)
// `;

// export const createMaxWithMediaQuery = n => `
//   @media screen and (max-width: ${n}px)
// `;

// export const mediaMinMainStyles = css`
//   ${createMinWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     width: ${({ phoneMinWidth }) => phoneMinWidth};
//     height: ${({ phoneMinHeight }) => phoneMinHeight};
//     border: ${({ phoneMinBorder }) => phoneMinBorder}
//     margin: ${({ phoneMinMargin }) => phoneMinMargin};
//     padding: ${({ phoneMinPadding }) => phoneMinPadding};
//     opacity: ${({ phoneMinOpacity }) => phoneMinOpacity};
//     display: ${({ phoneMinDisplay }) => phoneMinDisplay};
//     text-align: ${({ phoneTextAlign }) => phoneTextAlign};
//     overflow: ${({ phoneMinOverflow }) => phoneMinOverflow};
//     font-size: ${({ phoneMinFontSize }) => phoneMinFontSize};
//     min-width: ${({ phoneMinMinWidth }) => phoneMinMinWidth};
//     animation: ${({ phoneMinAnimation }) => phoneMinAnimation};
//     transform: ${({ phoneMinTransform }) => phoneMinTransform};
//     max-height: ${({ phoneMinMaxHeight }) => phoneMinMaxHeight};
//     min-height: ${({ phoneMinMinHeight }) => phoneMinMinHeight};
//     border-top: ${({ phoneMinBorderTop }) => phoneMinBorderTop};
//     box-shadow: ${({ phoneMinBoxShadow }) => phoneMinBoxShadow};
//     background: ${({ phoneMinBackground }) => phoneMinBackground};
//     transition: ${({ phoneMinTransition }) => phoneMinTransition};
//     line-height: ${({ phoneMinLineHeight }) => phoneMinLineHeight};
//     border-color: ${({ phoneMinBorderColor }) => phoneMinBorderColor};
//     border-radius: ${({ phoneMinBorderRadius }) => phoneMinBorderRadius};
//     background-size: ${({ phoneMinBackgroundSize }) => phoneMinBackgroundSize};
//   }
//   ${createMinWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     width: ${({ tabletMinWidth }) => tabletMinWidth};
//     height: ${({ tabletMinHeight }) => tabletMinHeight};
//     margin: ${({ tabletMinMargin }) => tabletMinMargin};
//     border: ${({ tabletMinBorder }) => tabletMinBorder};
//     padding: ${({ tabletMinPadding }) => tabletMinPadding};
//     display: ${({ tabletMinDisplay }) => tabletMinDisplay};
//     opacity: ${({ tabletMinOpacity }) => tabletMinOpacity};
//     text-align: ${({ tabletTextAlign }) => tabletTextAlign};
//     overflow: ${({ tabletMinOverflow }) => tabletMinOverflow};
//     font-size: ${({ tabletMinFontSize }) => tabletMinFontSize};
//     min-width: ${({ tabletMinMinWidth }) => tabletMinMinWidth};
//     animation: ${({ tabletMinAnimation }) => tabletMinAnimation};
//     transform: ${({ tabletMinTransform }) => tabletMinTransform};
//     max-height: ${({ tabletMinMaxHeight }) => tabletMinMaxHeight};
//     min-height: ${({ tabletMinMinHeight }) => tabletMinMinHeight};
//     border-top: ${({ tabletMinBorderTop }) => tabletMinBorderTop};
//     box-shadow: ${({ tabletMinBoxShadow }) => tabletMinBoxShadow};
//     transition: ${({ tabletMinTransition }) => tabletMinTransition};
//     background: ${({ tabletMinBackground }) => tabletMinBackground};
//     line-height: ${({ tabletMinLineHeight }) => tabletMinLineHeight};
//     border-color: ${({ tabletMinBorderColor }) => tabletMinBorderColor};
//     border-radius: ${({ tabletMinBorderRadius }) => tabletMinBorderRadius};
//     background-size: ${({ tabletMinBackgroundSize }) => tabletMinBackgroundSize};
//     background-color: ${({ tabletMinBackgroundColor }) => tabletMinBackgroundColor};
//   }
//   ${createMinWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     width: ${({ desktopMinWidth }) => desktopMinWidth};
//     height: ${({ desktopMinHeight }) => desktopMinHeight};
//     margin: ${({ desktopMinMargin }) => desktopMinMargin};
//     border: ${({ desktopMinBorder }) => desktopMinBorder};
//     padding: ${({ desktopMinPadding }) => desktopMinPadding};
//     display: ${({ desktopMinDisplay }) => desktopMinDisplay};
//     opacity: ${({ desktopMinOpacity }) => desktopMinOpacity};
//     text-align: ${({ desktopTextAlign }) => desktopTextAlign};
//     overflow: ${({ desktopMinOverflow }) => desktopMinOverflow};
//     min-width: ${({ desktopMinMinWidth }) => desktopMinMinWidth};
//     font-size: ${({ desktopMinFontSize }) => desktopMinFontSize};
//     animation: ${({ desktopMinAnimation }) => desktopMinAnimation};
//     transform: ${({ desktopMinTransform }) => desktopMinTransform};
//     max-height: ${({ desktopMinMaxHeight }) => desktopMinMaxHeight};
//     min-height: ${({ desktopMinMinHeight }) => desktopMinMinHeight};
//     border-top: ${({ desktopMinBorderTop }) => desktopMinBorderTop};
//     box-shadow: ${({ desktopMinBoxShadow }) => desktopMinBoxShadow};
//     background: ${({ desktopMinBackground }) => desktopMinBackground};
//     transition: ${({ desktopMinTransition }) => desktopMinTransition};
//     line-height: ${({ desktopMinLineHeight }) => desktopMinLineHeight};
//     border-color: ${({ desktopMinBorderColor }) => desktopMinBorderColor};
//     margin-right: ${({ desktopMinMarginRight }) => desktopMinMarginRight};
//     border-radius: ${({ desktopMinBorderRadius }) => desktopMinBorderRadius};
//     background-size: ${({ desktopMinBackgroundSize }) => desktopMinBackgroundSize};
//     background-color: ${({ desktopMinBackgroundColor }) => desktopMinBackgroundColor};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     width: ${({ laptopMDPIMinWidth }) => laptopMDPIMinWidth};
//     border: ${({ laptopMDPMinBorder }) => laptopMDPMinBorder};
//     height: ${({ laptopMDPIMinHeight }) => laptopMDPIMinHeight};
//     margin: ${({ laptopMDPIMinMargin }) => laptopMDPIMinMargin};
//     opacity: ${({ laptopMDPIMinOpacity }) => laptopMDPIMinOpacity};
//     display: ${({ laptopMDPIMinDisplay }) => laptopMDPIMinDisplay};
//     padding: ${({ laptopMDPIMinPadding }) => laptopMDPIMinPadding};
//     text-align: ${({ laptopMDPITextAlign }) => laptopMDPITextAlign};
//     font-size: ${({ laptopMDPMinFontSize }) => laptopMDPMinFontSize};
//     overflow: ${({ laptopMDPIMinOverflow }) => laptopMDPIMinOverflow};
//     min-width: ${({ laptopMDPIMinMinWidth }) => laptopMDPIMinMinWidth};
//     animation: ${({ laptopMDPMinAnimation }) => laptopMDPMinAnimation};
//     border-top: ${({ laptopMDPMinBorderTop }) => laptopMDPMinBorderTop};
//     transform: ${({ laptopMDPIMinTransform }) => laptopMDPIMinTransform};
//     max-height: ${({ laptopMDPIMinMaxHeight }) => laptopMDPIMinMaxHeight};
//     min-height: ${({ laptopMDPIMinMinHeight }) => laptopMDPIMinMinHeight};
//     box-shadow: ${({ laptopMDPIMinBoxShadow }) => laptopMDPIMinBoxShadow};
//     background: ${({ laptopMDPIMinBackground }) => laptopMDPIMinBackground};
//     transition: ${({ laptopMDPIMinTransition }) => laptopMDPIMinTransition};
//     line-height: ${({ laptopMDPIMinLineHeight }) => laptopMDPIMinLineHeight};
//     border-color: ${({ laptopMDPMinBorderColor }) => laptopMDPMinBorderColor};
//     border-radius: ${({ laptopMDPIMinBorderRadius }) => laptopMDPIMinBorderRadius};
//     background-size: ${({ laptopMDPIMinBackgroundSize }) => laptopMDPIMinBackgroundSize};
//     background-color: ${({ laptopMDPMinBackgroundColor }) => laptopMDPMinBackgroundColor};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     width: ${({ laptopLargeMinWidth }) => laptopLargeMinWidth};
//     height: ${({ laptopLargeMinHeight }) => laptopLargeMinHeight};
//     margin: ${({ laptopLargeMinMargin }) => laptopLargeMinMargin};
//     border: ${({ laptopLargeMinBorder }) => laptopLargeMinBorder};
//     display: ${({ laptopLargeMinDisplay }) => laptopLargeMinDisplay};
//     padding: ${({ laptopLargeMinPadding }) => laptopLargeMinPadding};
//     opacity: ${({ laptopLargeMinOpacity }) => laptopLargeMinOpacity};
//     text-align: ${({ laptopLargeTextAlign }) => laptopLargeTextAlign};
//     overflow: ${({ laptopLargeMinOverflow }) => laptopLargeMinOverflow};
//     font-size: ${({ laptopLargeMinFontSize }) => laptopLargeMinFontSize};
//     min-width: ${({ laptopLargeMinMinWidth }) => laptopLargeMinMinWidth};
//     transform: ${({ laptopLargeMinTransform }) => laptopLargeMinTransform};
//     animation: ${({ laptopLargeMinAnimation }) => laptopLargeMinAnimation};
//     min-height: ${({ laptopLargeMinMinHeight }) => laptopLargeMinMinHeight};
//     max-height: ${({ laptopLargeMinMaxHeight }) => laptopLargeMinMaxHeight};
//     border-top: ${({ laptopLargeMinBorderTop }) => laptopLargeMinBorderTop};
//     box-shadow: ${({ laptopLargeMinBoxShadow }) => laptopLargeMinBoxShadow};
//     background: ${({ laptopLargeMinBackground }) => laptopLargeMinBackground};
//     transition: ${({ laptopLargeMinTransition }) => laptopLargeMinTransition};
//     line-height: ${({ laptopLargeMinLineHeight }) => laptopLargeMinLineHeight};
//     border-color: ${({ laptopLargeMinBorderColor }) => laptopLargeMinBorderColor};
//     border-radius: ${({ laptopLargeMinBorderRadius }) => laptopLargeMinBorderRadius};
//     background-size: ${({ laptopLargeMinBackgroundSize }) => laptopLargeMinBackgroundSize};
//     background-color: ${({ laptopLargeMinBackgroundColor }) => laptopLargeMinBackgroundColor};
//   }
//   ${createMinWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     width: ${({ screenMinWidth }) => screenMinWidth};
//     height: ${({ screenMinHeight }) => screenMinHeight};
//     margin: ${({ screenMinMargin }) => screenMinMargin};
//     border: ${({ screenMinBorder }) => screenMinBorder};
//     display: ${({ screenMinDisplay }) => screenMinDisplay};
//     padding: ${({ screenMinPadding }) => screenMinPadding};
//     opacity: ${({ screenMinOpacity }) => screenMinOpacity};
//     text-align: ${({ screenTextAlign }) => screenTextAlign};
//     overflow: ${({ screenMinOverflow }) => screenMinOverflow};
//     min-width: ${({ screenMinMinWidth }) => screenMinMinWidth};
//     font-size: ${({ screenMinFontSize }) => screenMinFontSize};
//     transform: ${({ screenMinTransform }) => screenMinTransform};
//     animation: ${({ screenMinAnimation }) => screenMinAnimation};
//     min-height: ${({ screenMinMinHeight }) => screenMinMinHeight};
//     max-height: ${({ screenMinMaxHeight }) => screenMinMaxHeight};
//     border-top: ${({ screenMinBorderTop }) => screenMinBorderTop};
//     box-shadow: ${({ screenMinBoxShadow }) => screenMinBoxShadow};
//     background: ${({ screenMinBackground }) => screenMinBackground};
//     Transition: ${({ screenMinTransition }) => screenMinTransition};
//     line-height: ${({ screenMinLineHeight }) => screenMinLineHeight};
//     border-color: ${({ screenMinBorderColor }) => screenMinBorderColor};
//     border-radius: ${({ screenMinBorderRadius }) => screenMinBorderRadius};
//     background-size: ${({ screenMinBackgroundSize }) => screenMinBackgroundSize};
//     background-color: ${({ screenMinBackgroundColor }) => screenMinBackgroundColor};
//   }
// `;

// export const mediaMaxMainStyles = css`
//   ${createMaxWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     width: ${({ screenMaxWidth }) => screenMaxWidth};
//     height: ${({ screenMaxHeight }) => screenMaxHeight};
//     margin: ${({ screenMaxMargin }) => screenMaxMargin};
//     border: ${({ screenMaxBorder }) => screenMaxBorder};
//     padding: ${({ screenMaxPadding }) => screenMaxPadding};
//     display: ${({ screenMaxDisplay }) => screenMaxDisplay};
//     opacity: ${({ screenMaxOpacity }) => screenMaxOpacity};
//     overflow: ${({ screenMaxOverflow }) => screenMaxOverflow};
//     min-width: ${({ screenMaxMinWidth }) => screenMaxMinWidth};
//     font-size: ${({ screenMaxFontSize }) => screenMaxFontSize};
//     animation: ${({ screenMaxAnimation }) => screenMaxAnimation};
//     transform: ${({ screenMaxTransform }) => screenMaxTransform};
//     text-align: ${({ screenMaxTextAlign }) => screenMaxTextAlign};
//     max-height: ${({ screenMaxMaxHeight }) => screenMaxMaxHeight};
//     min-height: ${({ screenMaxMinHeight }) => screenMaxMinHeight};
//     border-top: ${({ screenMaxBorderTop }) => screenMaxBorderTop};
//     box-shadow: ${({ screenMaxBoxShadow }) => screenMaxBoxShadow};
//     background: ${({ screenMaxBackground }) => screenMaxBackground};
//     transition: ${({ screenMaxTransition }) => screenMaxTransition};
//     line-height: ${({ screenMaxLineHeight }) => screenMaxLineHeight};
//     border-color: ${({ screenMaxBorderColor }) => screenMaxBorderColor};
//     margin-right: ${({ screenMaxMarginRight }) => screenMaxMarginRight};
//     border-radius: ${({ screenMaxBorderRadius }) => screenMaxBorderRadius};
//     background-size: ${({ screenMaxBackgroundSize }) => screenMaxBackgroundSize};
//     background-color: ${({ screenMaxBackgroundColor }) => screenMaxBackgroundColor};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     width: ${({ laptopLargeMaxWidth }) => laptopLargeMaxWidth};
//     height: ${({ laptopLargeMaxHeight }) => laptopLargeMaxHeight};
//     margin: ${({ laptopLargeMaxMargin }) => laptopLargeMaxMargin};
//     border: ${({ laptopLargeMaxBorder }) => laptopLargeMaxBorder};
//     padding: ${({ laptopLargeMaxPadding }) => laptopLargeMaxPadding};
//     display: ${({ laptopLargeMaxDisplay }) => laptopLargeMaxDisplay};
//     opacity: ${({ laptopLargeMaxOpacity }) => laptopLargeMaxOpacity};
//     overflow: ${({ laptopLargeMaxOverflow }) => laptopLargeMaxOverflow};
//     min-width: ${({ laptopLargeMaxMinWidth }) => laptopLargeMaxMinWidth};
//     font-size: ${({ laptopLargeMaxFontSize }) => laptopLargeMaxFontSize};
//     animation: ${({ laptopLargeMaxAnimation }) => laptopLargeMaxAnimation};
//     transform: ${({ laptopLargeMaxTransform }) => laptopLargeMaxTransform};
//     text-align: ${({ laptopLargeMaxTextAlign }) => laptopLargeMaxTextAlign};
//     max-height: ${({ laptopLargeMaxMaxHeight }) => laptopLargeMaxMaxHeight};
//     min-height: ${({ laptopLargeMaxMinHeight }) => laptopLargeMaxMinHeight};
//     border-top: ${({ laptopLargeMaxBorderTop }) => laptopLargeMaxBorderTop};
//     box-shadow: ${({ laptopLargeMaxBoxShadow }) => laptopLargeMaxBoxShadow};
//     background: ${({ laptopLargeMaxBackground }) => laptopLargeMaxBackground};
//     transition: ${({ laptopLargeMaxTransition }) => laptopLargeMaxTransition};
//     line-height: ${({ laptopLargeMaxLineHeight }) => laptopLargeMaxLineHeight};
//     border-color: ${({ laptopLargeMaxBorderColor }) => laptopLargeMaxBorderColor};
//     margin-right: ${({ laptopLargeMaxMarginRight }) => laptopLargeMaxMarginRight};
//     border-radius: ${({ laptopLargeMaxBorderRadius }) => laptopLargeMaxBorderRadius};
//     background-size: ${({ laptopLargeMaxBackgroundSize }) => laptopLargeMaxBackgroundSize};
//     background-color: ${({ laptopLargeMaxBackgroundColor }) => laptopLargeMaxBackgroundColor};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     width: ${({ laptopMDPIMaxWidth }) => laptopMDPIMaxWidth};
//     height: ${({ laptopMDPIMaxHeight }) => laptopMDPIMaxHeight};
//     margin: ${({ laptopMDPIMaxMargin }) => laptopMDPIMaxMargin};
//     border: ${({ laptopMDPIMaxBorder }) => laptopMDPIMaxBorder};
//     padding: ${({ laptopMDPIMaxPadding }) => laptopMDPIMaxPadding};
//     display: ${({ laptopMDPIMaxDisplay }) => laptopMDPIMaxDisplay};
//     opacity: ${({ laptopMDPIMaxOpacity }) => laptopMDPIMaxOpacity};
//     overflow: ${({ laptopMDPIMaxOverflow }) => laptopMDPIMaxOverflow};
//     min-width: ${({ laptopMDPIMaxMinWidth }) => laptopMDPIMaxMinWidth};
//     font-size: ${({ laptopMDPIMaxFontSize }) => laptopMDPIMaxFontSize};
//     animation: ${({ laptopMDPIMaxAnimation }) => laptopMDPIMaxAnimation};
//     transform: ${({ laptopMDPIMaxTransform }) => laptopMDPIMaxTransform};
//     text-align: ${({ laptopMDPIMaxTextAlign }) => laptopMDPIMaxTextAlign};
//     max-height: ${({ laptopMDPIMaxMaxHeight }) => laptopMDPIMaxMaxHeight};
//     min-height: ${({ laptopMDPIMaxMinHeight }) => laptopMDPIMaxMinHeight};
//     border-top: ${({ laptopMDPIMaxBorderTop }) => laptopMDPIMaxBorderTop};
//     box-shadow: ${({ laptopMDPIMaxBoxShadow }) => laptopMDPIMaxBoxShadow};
//     background: ${({ laptopMDPIMaxBackground }) => laptopMDPIMaxBackground};
//     transition: ${({ laptopMDPIMaxTransition }) => laptopMDPIMaxTransition};
//     line-height: ${({ laptopMDPIMaxLineHeight }) => laptopMDPIMaxLineHeight};
//     border-color: ${({ laptopMDPIMaxBorderColor }) => laptopMDPIMaxBorderColor};
//     margin-right: ${({ laptopMDPIMaxMarginRight }) => laptopMDPIMaxMarginRight};
//     border-radius: ${({ laptopMDPIMaxBorderRadius }) => laptopMDPIMaxBorderRadius};
//     background-size: ${({ laptopMDPIMaxBackgroundSize }) => laptopMDPIMaxBackgroundSize};
//     background-color: ${({ laptopMDPIMaxBackgroundColor }) => laptopMDPIMaxBackgroundColor};
//   }
//   ${createMaxWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     width: ${({ desktopMaxWidth }) => desktopMaxWidth};
//     height: ${({ desktopMaxHeight }) => desktopMaxHeight};
//     margin: ${({ desktopMaxMargin }) => desktopMaxMargin};
//     border: ${({ desktopMaxBorder }) => desktopMaxBorder};
//     padding: ${({ desktopMaxPadding }) => desktopMaxPadding};
//     display: ${({ desktopMaxDisplay }) => desktopMaxDisplay};
//     opacity: ${({ desktopMaxOpacity }) => desktopMaxOpacity};
//     overflow: ${({ desktopMaxOverflow }) => desktopMaxOverflow};
//     min-width: ${({ desktopMaxMinWidth }) => desktopMaxMinWidth};
//     font-size: ${({ desktopMaxFontSize }) => desktopMaxFontSize};
//     animation: ${({ desktopMaxAnimation }) => desktopMaxAnimation};
//     transform: ${({ desktopMaxTransform }) => desktopMaxTransform};
//     max-height: ${({ desktopMaxMaxHeight }) => desktopMaxMaxHeight};
//     min-height: ${({ desktopMaxMinHeight }) => desktopMaxMinHeight};
//     border-top: ${({ desktopMaxBorderTop }) => desktopMaxBorderTop};
//     box-shadow: ${({ desktopMaxBoxShadow }) => desktopMaxBoxShadow};
//     text-align: ${({ desktopMaxTextAlign }) => desktopMaxTextAlign};
//     background: ${({ desktopMaxBackground }) => desktopMaxBackground};
//     transition: ${({ desktopMaxTransition }) => desktopMaxTransition};
//     line-height: ${({ desktopMaxLineHeight }) => desktopMaxLineHeight};
//     border-color: ${({ desktopMaxBorderColor }) => desktopMaxBorderColor};
//     margin-right: ${({ desktopMaxMarginRight }) => desktopMaxMarginRight};
//     border-radius: ${({ desktopMaxBorderRadius }) => desktopMaxBorderRadius};
//     background-size: ${({ desktopMaxBackgroundSize }) => desktopMaxBackgroundSize};
//     background-color: ${({ desktopMaxBackgroundColor }) => desktopMaxBackgroundColor};
// }
//   ${createMaxWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     width: ${({ tabletMaxWidth }) => tabletMaxWidth};
//     height: ${({ tabletMaxHeight }) => tabletMaxHeight};
//     margin: ${({ tabletMaxMargin }) => tabletMaxMargin};
//     border: ${({ tabletMaxBorder }) => tabletMaxBorder};
//     padding: ${({ tabletMaxPadding }) => tabletMaxPadding};
//     display: ${({ tabletMaxDisplay }) => tabletMaxDisplay};
//     opacity: ${({ tabletMaxOpacity }) => tabletMaxOpacity};
//     overflow: ${({ tabletMaxOverflow }) => tabletMaxOverflow};
//     font-size: ${({ tabletMaxFontSize }) => tabletMaxFontSize};
//     min-width: ${({ tabletMaxMinWidth }) => tabletMaxMinWidth};
//     animation: ${({ tabletMaxAnimation }) => tabletMaxAnimation};
//     transform: ${({ tabletMaxTransform }) => tabletMaxTransform};
//     max-height: ${({ tabletMaxMaxHeight }) => tabletMaxMaxHeight};
//     text-align: ${({ tabletMaxTextAlign }) => tabletMaxTextAlign};
//     min-height: ${({ tabletMaxMinHeight }) => tabletMaxMinHeight};
//     border-top: ${({ tabletMaxBorderTop }) => tabletMaxBorderTop};
//     box-shadow: ${({ tabletMaxBoxShadow }) => tabletMaxBoxShadow};
//     transition: ${({ tabletMaxTransition }) => tabletMaxTransition};
//     background: ${({ tabletMaxBackground }) => tabletMaxBackground};
//     line-height: ${({ tabletMaxLineHeight }) => tabletMaxLineHeight};
//     border-color: ${({ tabletMaxBorderColor }) => tabletMaxBorderColor};
//     border-radius: ${({ tabletMaxBorderRadius }) => tabletMaxBorderRadius};
//     background-size: ${({ tabletMaxBackgroundSize }) => tabletMaxBackgroundSize};
//     background-color: ${({ tabletMaxBackgroundColor }) => tabletMaxBackgroundColor};
//   }
//   ${createMaxWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     width: ${({ phoneMaxWidth }) => phoneMaxWidth};
//     height: ${({ phoneMaxHeight }) => phoneMaxHeight};
//     border: ${({ phoneMaxBorder }) => phoneMaxBorder};
//     margin: ${({ phoneMaxMargin }) => phoneMaxMargin};
//     padding: ${({ phoneMaxPadding }) => phoneMaxPadding};
//     opacity: ${({ phoneMaxOpacity }) => phoneMaxOpacity};
//     display: ${({ phoneMaxDisplay }) => phoneMaxDisplay};
//     text-align: ${({ phoneTextAlign }) => phoneTextAlign};
//     overflow: ${({ phoneMaxOverflow }) => phoneMaxOverflow};
//     font-size: ${({ phoneMaxFontSize }) => phoneMaxFontSize};
//     min-width: ${({ phoneMaxMinWidth }) => phoneMaxMinWidth};
//     animation: ${({ phoneMaxAnimation }) => phoneMaxAnimation};
//     transform: ${({ phoneMaxTransform }) => phoneMaxTransform};
//     max-height: ${({ phoneMaxMaxHeight }) => phoneMaxMaxHeight};
//     min-height: ${({ phoneMaxMinHeight }) => phoneMaxMinHeight};
//     border-top: ${({ phoneMaxBorderTop }) => phoneMaxBorderTop};
//     box-shadow: ${({ phoneMaxBoxShadow }) => phoneMaxBoxShadow};
//     background: ${({ phoneMaxBackground }) => phoneMaxBackground};
//     transition: ${({ phoneMaxTransition }) => phoneMaxTransition};
//     line-height: ${({ phoneMaxLineHeight }) => phoneMaxLineHeight};
//     border-color: ${({ phoneMaxBorderColor }) => phoneMaxBorderColor};
//     border-radius: ${({ phoneMaxBorderRadius }) => phoneMaxBorderRadius};
//     background-size: ${({ phoneMaxBackgroundSize }) => phoneMaxBackgroundSize};
//   }
// `;

// export const mediaMinFlexStyles = css`
//   ${createMinWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     flex-wrap: ${({ phoneMinFlexWrap }) => phoneMinFlexWrap};
//     align-items: ${({ phoneMinAlignItems }) => phoneMinAlignItems};
//     flex-direction: ${({ phoneMinFlexDirection }) => phoneMinFlexDirection};
//     justify-content: ${({ phoneMinJustifyContent }) => phoneMinJustifyContent};
//   }
//   ${createMinWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     flex-wrap: ${({ tabletMinFlexWrap }) => tabletMinFlexWrap};
//     align-items: ${({ tabletMinAlignItems }) => tabletMinAlignItems};
//     flex-direction: ${({ tabletMinFlexDirection }) => tabletMinFlexDirection};
//     justify-content: ${({ tabletMinJustifyContent }) => tabletMinJustifyContent};
//   }
//   ${createMinWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     flex-wrap: ${({ desktopMinFlexWrap }) => desktopMinFlexWrap};
//     align-items: ${({ desktopMinAlignItems }) => desktopMinAlignItems};
//     flex-direction: ${({ desktopMinFlexDirection }) => desktopMinFlexDirection};
//     justify-content: ${({ desktopMinJustifyContent }) => desktopMinJustifyContent};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     flex-wrap: ${({ laptopMDPIMinFlexWrap }) => laptopMDPIMinFlexWrap};
//     align-items: ${({ laptopMDPIMinAlignItems }) => laptopMDPIMinAlignItems};
//     flex-direction: ${({ laptopMDPIMinFlexDirection }) => laptopMDPIMinFlexDirection};
//     justify-content: ${({ laptopMDPIMinJustifyContent }) => laptopMDPIMinJustifyContent};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     flex-wrap: ${({ laptopLargeMinFlexWrap }) => laptopLargeMinFlexWrap};
//     align-items: ${({ laptopLargeMinAlignItems }) => laptopLargeMinAlignItems};
//     flex-direction: ${({ laptopLargeMinFlexDirection }) => laptopLargeMinFlexDirection};
//     justify-content: ${({ laptopLargeMinJustifyContent }) => laptopLargeMinJustifyContent};
//   }
//   ${createMinWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     flex-wrap: ${({ screenMinFlexWrap }) => screenMinFlexWrap};
//     align-items: ${({ screenMinAlignItems }) => screenMinAlignItems};
//     flex-direction: ${({ screenMinFlexDirection }) => screenMinFlexDirection};
//     justify-content: ${({ screenMinJustifyContent }) => screenMinJustifyContent};
//   }
// `;

// export const mediaMaxFlexStyles = css`
//   ${createMaxWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     flex-wrap: ${({ phoneMaxFlexWrap }) => phoneMaxFlexWrap};
//     align-self: ${({ phoneMaxAlignSelf }) => phoneMaxAlignSelf};
//     align-items: ${({ phoneMaxAlignItems }) => phoneMaxAlignItems};
//     flex-direction: ${({ phoneMaxFlexDirection }) => phoneMaxFlexDirection};
//     justify-content: ${({ phoneMaxJustifyContent }) => phoneMaxJustifyContent};
//   }
//   ${createMaxWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     flex-wrap: ${({ tabletMaxFlexWrap }) => tabletMaxFlexWrap};
//     align-self: ${({ tabletMaxAlignSelf }) => tabletMaxAlignSelf};
//     align-items: ${({ tabletMaxAlignItems }) => tabletMaxAlignItems};
//     flex-direction: ${({ tabletMaxFlexDirection }) => tabletMaxFlexDirection};
//     justify-content: ${({ tabletMaxJustifyContent }) => tabletMaxJustifyContent};
//   }
//   ${createMaxWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     flex-wrap: ${({ desktopMaxFlexWrap }) => desktopMaxFlexWrap};
//     align-self: ${({ desktopMaxAlignSelf }) => desktopMaxAlignSelf};
//     align-items: ${({ desktopMaxAlignItems }) => desktopMaxAlignItems};
//     flex-direction: ${({ desktopMaxFlexDirection }) => desktopMaxFlexDirection};
//     justify-content: ${({ desktopMaxJustifyContent }) => desktopMaxJustifyContent};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     flex-wrap: ${({ laptopMDPIMaxFlexWrap }) => laptopMDPIMaxFlexWrap};
//     align-self: ${({ laptopMDPIMaxAlignSelf }) => laptopMDPIMaxAlignSelf};
//     align-items: ${({ laptopMDPIMaxAlignItems }) => laptopMDPIMaxAlignItems};
//     flex-direction: ${({ laptopMDPIMaxFlexDirection }) => laptopMDPIMaxFlexDirection};
//     justify-content: ${({ laptopMDPIMaxJustifyContent }) => laptopMDPIMaxJustifyContent};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     flex-wrap: ${({ laptopLargeMaxFlexWrap }) => laptopLargeMaxFlexWrap};
//     align-self: ${({ LaptopLargeMaxAlignSelf }) => LaptopLargeMaxAlignSelf};
//     align-items: ${({ laptopLargeMaxAlignItems }) => laptopLargeMaxAlignItems};
//     flex-direction: ${({ laptopLargeMaxFlexDirection }) => laptopLargeMaxFlexDirection};
//     justify-content: ${({ laptopLargeMaxJustifyContent }) => laptopLargeMaxJustifyContent};
//   }
//   ${createMaxWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     flex-wrap: ${({ screenMaxFlexWrap }) => screenMaxFlexWrap};
//     align-self: ${({ screenMaxAlignSelf }) => screenMaxAlignSelf};
//     align-items: ${({ screenMaxAlignItems }) => screenMaxAlignItems};
//     flex-direction: ${({ screenMaxFlexDirection }) => screenMaxFlexDirection};
//     justify-content: ${({ screenMaxJustifyContent }) => screenMaxJustifyContent};
//   }
// `;

// export const mediaMinGridStyles = css`
//   ${createMinWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     grid-row: ${({ phoneMinGridRow }) => phoneMinGridRow};
//     grid-gap: ${({ phoneMinGridGap }) => phoneMinGridGap};
//     grid-column: ${({ phoneMinGridColumn }) => phoneMinGridColumn};
//     grid-template-columns: ${({ phoneMinGridTemplateColumns }) => phoneMinGridTemplateColumns};
//   }
//   ${createMinWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     grid-row: ${({ tabletMinGridRow }) => tabletMinGridRow};
//     grid-gap: ${({ tabletMinGridGap }) => tabletMinGridGap};
//     grid-column: ${({ tabletMinGridColumn }) => tabletMinGridColumn};
//     grid-template-columns: ${({ tabletMinGridTemplateColumns }) => tabletMinGridTemplateColumns};
//   }
//   ${createMinWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     grid-row: ${({ desktopMinGridRow }) => desktopMinGridRow};
//     grid-gap: ${({ desktopMinGridGap }) => desktopMinGridGap};
//     grid-column: ${({ desktopMinGridColumn }) => desktopMinGridColumn};
//     grid-template-columns: ${({ desktopMinGridTemplateColumns }) => desktopMinGridTemplateColumns};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     grid-gap: ${({ laptopMDPIMinGridGap }) => laptopMDPIMinGridGap};
//     grid-row: ${({ laptopMDPIMinGridRow }) => laptopMDPIMinGridRow};
//     grid-column: ${({ laptopMDPIMinGridColumn }) => laptopMDPIMinGridColumn};
//     grid-template-columns: ${({ laptopMDPIMinGridTemplateColumns }) => laptopMDPIMinGridTemplateColumns};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
   
//     grid-gap: ${({ laptopLargeMinGridGap }) => laptopLargeMinGridGap};
//     grid-row: ${({ laptopLargeMinGridRow }) => laptopLargeMinGridRow};
//     grid-column: ${({ laptopLargeMinGridColumn }) => laptopLargeMinGridColumn};
//     grid-template-columns: ${({ laptopLargeMinGridTemplateColumns }) => laptopLargeMinGridTemplateColumns};
//   }
//   ${createMinWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     grid-gap: ${({ screenMinGridGap }) => screenMinGridGap};
//     grid-row: ${({ screenMinGridRow }) => screenMinGridRow};
//     grid-column: ${({ screenMinGridColumn }) => screenMinGridColumn};
//     grid-template-columns: ${({ screenMinGridTemplateColumns }) => screenMinGridTemplateColumns};
//   }
// `;

// export const mediaMaxGridStyles = css`
//   ${createMaxWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     grid-row: ${({ phoneMaxGridRow }) => phoneMaxGridRow};
//     grid-column: ${({ phoneMaxGridColumn }) => phoneMaxGridColumn};
//     grid-template-columns: ${({ phoneMaxGridTemplateColumns }) => phoneMaxGridTemplateColumns};
//   }
//   ${createMaxWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     grid-row: ${({ tabletMaxGridRow }) => tabletMaxGridRow};
//     grid-column: ${({ tabletMaxGridColumn }) => tabletMaxGridColumn};
//     grid-template-columns: ${({ tabletMaxGridTemplateColumns }) => tabletMaxGridTemplateColumns};
//   }
//   ${createMaxWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     grid-row: ${({ desktopMaxGridRow }) => desktopMaxGridRow};
//     grid-column: ${({ desktopMaxGridColumn }) => desktopMaxGridColumn};
//     grid-template-columns: ${({ desktopMaxGridTemplateColumns }) => desktopMaxGridTemplateColumns};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     grid-row: ${({ laptopMDPIMaxGridRow }) => laptopMDPIMaxGridRow};
//     grid-column: ${({ laptopMDPIMaxGridColumn }) => laptopMDPIMaxGridColumn};
//     grid-template-columns: ${({ laptopMDPIMaxGridTemplateColumns }) => laptopMDPIMaxGridTemplateColumns};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     grid-row: ${({ laptopLargeMaxGridRow }) => laptopLargeMaxGridRow};
//     grid-column: ${({ laptopLargeMaxGridColumn }) => laptopLargeMaxGridColumn};
//     grid-template-columns: ${({ laptopLargeMaxGridTemplateColumns }) => laptopLargeMaxGridTemplateColumns};
//   }
//   ${createMaxWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     grid-row: ${({ screenMaxGridRow }) => screenMaxGridRow};
//     grid-column: ${({ screenMaxGridColumn }) => screenMaxGridColumn};
//     grid-template-columns: ${({ screenMaxGridTemplateColumns }) => screenMaxGridTemplateColumns};
//   }
// `;

// export const mediaMinPositionStyles = css`
//   ${createMinWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     top: ${({ phoneMinTop }) => phoneMinTop};
//     left: ${({ phoneMinLeft }) => phoneMinLeft};
//     right: ${({ phoneMinRight }) => phoneMinRight};
//     bottom: ${({ phoneMinBottom }) => phoneMinBottom};
//     position: ${({ phoneMinPosition }) => phoneMinPosition};
//   }
//   ${createMinWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     top: ${({ tabletMinTop }) => tabletMinTop};
//     left: ${({ tabletMinLeft }) => tabletMinLeft};
//     right: ${({ tabletMinRight }) => tabletMinRight};
//     bottom: ${({ tabletMinBottom }) => tabletMinBottom};
//     position: ${({ tableMinPosition }) => tableMinPosition};
//   }
//   ${createMinWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     top: ${({ desktopMinTop }) => desktopMinTop};
//     left: ${({ desktopMinLeft }) => desktopMinLeft};
//     right: ${({ desktopMinRight }) => desktopMinRight};
//     bottom: ${({ desktopMinBottom }) => desktopMinBottom};
//     position: ${({ desktopMinPosition }) => desktopMinPosition};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     top: ${({ laptopMDPIMinTop }) => laptopMDPIMinTop};
//     left: ${({ laptopMDPIMinLeft }) => laptopMDPIMinLeft};
//     right: ${({ laptopMDPIMinRight }) => laptopMDPIMinRight};
//     bottom: ${({ laptopMDPIMinBottom }) => laptopMDPIMinBottom};
//     position: ${({ laptopMDPIMinPosition }) => laptopMDPIMinPosition};
//   }
//   ${createMinWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     top: ${({ laptopLargeMinTop }) => laptopLargeMinTop};
//     left: ${({ laptopLargeMinLeft }) => laptopLargeMinLeft};
//     right: ${({ laptopLargeMinRight }) => laptopLargeMinRight};
//     bottom: ${({ laptopLargeMinBottom }) => laptopLargeMinBottom};
//     position: ${({ laptopLargeMinPosition }) => laptopLargeMinPosition};
//   }
//   ${createMinWithMediaQuery(C.SCREEN_UI_BREAKPOINT)} {
//     top: ${({ screenMinTop }) => screenMinTop};
//     left: ${({ screenMinLeft }) => screenMinLeft};
//     right: ${({ screenMinRight }) => screenMinRight};
//     bottom: ${({ screenMinBottom }) => screenMinBottom};
//     position: ${({ screenMinPosition }) => screenMinPosition};
//   }
// `;

// export const mediaMaxPositionStyles = css`
//   ${createMaxWithMediaQuery(C.PHONE_UI_BREAKPOINT)} {
//     top: ${({ phoneMaxTop }) => phoneMaxTop};
//     left: ${({ phoneMaxLeft }) => phoneMaxLeft};
//     right: ${({ phoneMaxRight }) => phoneMaxRight};
//     bottom: ${({ phoneMaxBottom }) => phoneMaxBottom};
//     position: ${({ phoneMaxPosition }) => phoneMaxPosition};
//   }
//   ${createMaxWithMediaQuery(C.TABLET_UI_BREAKPOINT)} {
//     top: ${({ tabletMaxTop }) => tabletMaxTop};
//     left: ${({ tabletMaxLeft }) => tabletMaxLeft};
//     right: ${({ tabletMaxRight }) => tabletMaxRight};
//     bottom: ${({ tabletMaxBottom }) => tabletMaxBottom};
//     position: ${({ tableMaxPosition }) => tableMaxPosition};
//   }
//   ${createMaxWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     top: ${({ desktopMaxTop }) => desktopMaxTop};
//     left: ${({ desktopMaxLeft }) => desktopMaxLeft};
//     right: ${({ desktopMaxRight }) => desktopMaxRight};
//     bottom: ${({ desktopMaxBottom }) => desktopMaxBottom};
//     position: ${({ desktopMaxPosition }) => desktopMaxPosition};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_MDPI_UI_BREAKPOINT)} {
//     top: ${({ laptopMDPIMaxTop }) => laptopMDPIMaxTop};
//     left: ${({ laptopMDPIMaxLeft }) => laptopMDPIMaxLeft};
//     right: ${({ laptopMDPIMaxRight }) => laptopMDPIMaxRight};
//     bottom: ${({ laptopMDPIMaxBottom }) => laptopMDPIMaxBottom};
//     position: ${({ laptopMDPIMaxPosition }) => laptopMDPIMaxPosition};
//   }
//   ${createMaxWithMediaQuery(C.LAPTOP_LARGE_UI_BREAKPOINT)} {
//     top: ${({ laptopLargeMaxTop }) => laptopLargeMaxTop};
//     left: ${({ laptopLargeMaxLeft }) => laptopLargeMaxLeft};
//     right: ${({ laptopLargeMaxRight }) => laptopLargeMaxRight};
//     bottom: ${({ laptopLargeMaxBottom }) => laptopLargeMaxBottom};
//     position: ${({ laptopLargeMaxPosition }) => laptopLargeMaxPosition};
//   }
// `;

// export const Abstract = (tag) => styled(tag)`
//   ${flex}
//   ${size}
//   ${color}
//   ${space}
//   ${width}
//   ${order}
//   ${height}
//   ${border}
//   ${zIndex}
//   ${opacity}
//   ${display}
//   ${fontSize}
//   ${overflow}
//   ${maxWidth}
//   ${minWidth}
//   ${textAlign}
//   ${maxHeight}
//   ${minHeight}
//   ${boxShadow}
//   ${borderTop}
//   ${fontWeight}
//   ${fontFamily}
//   ${fontWeight}
//   ${lineHeight}
//   ${borderLeft}
//   ${background}
//   ${borderRight}
//   ${borderBottom}
//   ${borderRadius}
//   ${letterSpacing}
//   ${backgroundSize}
//   ${backgroundImage}
//   float: ${({ float }) => float};
//   transform: ${({ transform }) => transform};
//   animation: ${({ animation }) => animation};
//   overflow-x: ${({ overflowX }) => overflowX};
//   word-break: ${({ wordBreak }) => wordBreak};
//   transition: ${({ transition }) => transition};
//   line-height: ${({ lineHeight }) => lineHeight};
//   white-space: ${({ whiteSpace }) => whiteSpace};
//   border-style: ${({ borderStyle }) => borderStyle};
//   border-color: ${({ borderColor }) => borderColor};
//   cursor: ${({ cursor }) => R.or(cursor, 'initial')};
//   text-overflow: ${({ textOverflow }) => textOverflow};
//   text-transform: ${({ textTransform }) => textTransform};
//   border-top-left-radius: ${({ borderTLR }) => borderTLR};
//   border-top-right-radius: ${({ borderTRR }) => borderTRR};
//   border-bottom-left-radius: ${({ borderBLR }) => borderBLR};
//   border-bottom-right-radius: ${({ borderBRR }) => borderBRR};
//   ${({ additionalStyles }) => additionalStyles};
//   /* ${mediaMinMainStyles}
//   ${mediaMaxMainStyles} */
// `;

// export const Box = Abstract('div');

// export const Img = Abstract('img');

// export const Iframe = Abstract('iframe');

// export const Flex = styled(Box)`
//   ${flex}
//   ${flexWrap}
//   ${alignSelf}
//   ${alignItems}
//   ${flexDirection}
//   ${justifyContent}
//   display: ${({ display }) => R.or(display, 'flex')};
//   /* ${mediaMinFlexStyles} */
//   /* ${mediaMaxFlexStyles} */
// `;

// export const Grid = styled(Box)`
//   ${gridGap}
//   ${gridRow}
//   ${gridColumn}
//   ${gridAutoRows}
//   ${gridAutoColumns}
//   ${gridTemplateRows}
//   ${gridTemplateColumns}
//   display: ${({ display }) => R.or(display, 'grid')};
//   /* ${mediaMinGridStyles}
//   ${mediaMaxGridStyles} */
// `;

// export const PositionedBox = styled(Box)`
//   ${top}
//   ${left}
//   ${right}
//   ${bottom}
//   ${position}
//   /* ${mediaMinPositionStyles}
//   ${mediaMaxPositionStyles} */
// `;

// export const PositionedFlex = styled(Flex)`
//   ${top}
//   ${left}
//   ${right}
//   ${bottom}
//   ${position}
//   /* ${mediaMinPositionStyles}
//   ${mediaMaxPositionStyles} */
// `;

// export const PositionedGrid = styled(Grid)`
//   ${top}
//   ${left}
//   ${right}
//   ${bottom}
//   ${position}
//   /* ${mediaMinPositionStyles}
//   ${mediaMaxPositionStyles} */
// `;

// export const Button = styled.button`
//   ${color}
//   ${space}
//   ${width}
//   ${height}
//   ${border}
//   ${zIndex}
//   ${opacity}
//   ${fontSize}
//   ${alignSelf}
//   ${boxShadow}
//   ${fontWeight}
//   ${fontFamily}
//   ${background}
//   ${borderRadius}
//   cursor: ${({ cursor }) => R.or(cursor, 'initial')};
//   text-transform: ${({ textTransform }) => textTransform};
//   ${({ additionalStyles }) => additionalStyles}
//   /* ${mediaMinMainStyles}
//   ${mediaMaxMainStyles} */
// `;

// export const Header = styled.header`
//   ${color}
//   ${space}
//   ${width}
//   ${zIndex}
//   ${display}
//   ${fontSize}
//   ${position}
//   ${boxShadow}
//   ${alignItems}
//   ${background}
//   transition: ${({ transition }) => transition};
// `;

// export const Footer = styled.footer`
//   ${color}
//   ${space}
//   ${display}
//   ${position}
//   ${fontSize}
//   ${borderTop}
//   ${alignItems}
//   ${background}
//   border-color: ${({ borderColor }) => borderColor};
// `;

// export const Label = styled.label`
//   ${space}
//   ${width}
//   ${color}
//   ${display}
//   ${fontSize}
//   ${alignItems}
//   &.required::after {
//     content: '*';
//     color: red;
//   }
// `;

// export const Input = styled.input`
//   ${space}
//   ${width}
//   ${height}
//   ${border}
//   ${display}
//   ${opacity}
//   ${minWidth}
//   ${fontSize}
//   ${background}
//   ${borderRadius}
//   cursor: ${({ cursor }) => cursor};
//   &:focus {
//     box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
//   }
// `;

// export const Image = styled.img`
//   ${width}
//   ${height}
//   /* ${mediaMinMainStyles}
//   ${mediaMaxMainStyles} */
//   border-radius: ${({ borderRadius }) => borderRadius}
// `;

// export const SelectComponent = styled.select`
//   ${space}
//   ${width}
//   ${height}
//   ${border}
//   ${fontSize}
//   ${position}
//   ${background}
//   ${lineHeight}
//   ${borderRadius}
//   appearance: none;
//   &:focus {
//     box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
//   }
// `;

// export const reversFlexStyles = css`
//   & > ${Flex}:nth-child(2n) {
//     & > ${Flex} {
//       padding-left: 0px;
//     }
//   }
//   /* ${createMinWithMediaQuery(C.DESKTOP_UI_BREAKPOINT)} {
//     & > ${Flex}:nth-child(2n) {
//       flex-direction: row-reverse;
//       & > ${Flex} {
//         padding-left: 100px;
//       }
//     }
//   } */
// `;

// export const animateShowPhoto = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(-800px) scale(0);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0px) scale(1);
//   }
// `;

// export const showPhotoStyle = () => css`
//   ${animateShowPhoto} 0.5s linear;
// `;
