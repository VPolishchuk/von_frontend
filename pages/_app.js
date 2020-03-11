// import App from 'next/app'
// import { register, unregister } from 'next-offline/runtime';
import React from 'react';
//////////////////////////////////////////////////////////////////d
import { createGlobalStyle } from 'styled-components';
const fontPath = "../public/fonts";
const GlobalStyle = createGlobalStyle`
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
`


class App extends React.Component {

  // componentDidMount () {
  //   register()
  // }
  // componentWillUnmount () {
  //   unregister()
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    )
  }
}
  
export default App;
