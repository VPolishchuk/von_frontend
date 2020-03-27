import styled, { css } from 'styled-components';
import * as R from 'ramda';
import * as C from './constant';
// //////////////////////////////////////////////////////////////////////////////

export const gradient = css`
  background: -webkit-linear-gradient(90deg, #D3136D 0%, #F4892B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const sectionMargin = css`
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const commonMargin = css`
  margin-top: 1em;
  margin-bottom: 1em;
`;
export const container = css`
  &.container {
    margin: 0 auto;
    max-width: ${C.maxWidth};
    min-width: ${C.minWidth};
  }
`;

export const largeFontSizeH2 = css`
  @media (max-width: ${C.phone}) {
    font-size: ${C.fSBigTable};
    line-height: ${C.lHMediumLaptop};
  }
`;

export const fontTemplate = css`
  font-size: ${C.fSBigTable};
  line-height: ${C.lHMediumLaptop};
`;

export const largeFontSizeH3 = css`
  @media (max-width: ${C.phone}) {
    font-size: ${C.fSBigTable};
    line-height: ${C.lHMediumLaptop};
  }
`;

export const largeFontSizeH6 = css`
  @media (max-width: ${C.phone}) {
    font-size: ${C.fSBigPhone};
    line-height: ${C.lHSPhone};
  }
`;

export const commonPadding = css`
  @media (max-width: ${C.phone}) {
    padding: 0 1rem;
  }
`;

export const gridWrap = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  @media (min-width: ${C.phone}) {
    column-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const downArrow = css`
  width: 20px; 
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.4s;
  background-size: contain;
  &.rotate,
  &:hover {
    transform: rotateX(180deg);
    transition: all 0.4s;
  }
`;

export const Paragraph = styled.p`
  color: ${C.blackL};
  font-style: normal;
  font-weight: normal;
  white-space: normal;
  font-family: Roboto, RobotoRegular;
  line-height: ${C.lHMPhone};
  font-size: ${C.fSBigPhone};
  &.black {
    color: ${C.blackL};
    line-height: ${C.lHLaptop};
    font-size: ${C.fSMediumLaptop};
  }
  &.white {
    color: ${C.white};
    line-height: ${C.lHBPhone};
    font-size: ${C.fSSmallTable};
  }
  &.grey {
    color: #878787;
    text-align: center;
    font-size: ${C.fSBigPhone};
  }
  ${commonPadding};
  ${container};
`;

export const Button = styled.button`
  border: 0;
  height: 50px;
  color: ${C.white};
  display: flex;
  cursor: pointer;
  font-weight: 500;
  min-width: 150px;
  font-style: normal;
  border-radius: 5px;
  align-items: center;
  background: ${C.pink};
  font-family: Roboto, RobotoRegular;
  line-height: ${C.lHBPhone};
  justify-content: center;
  font-size: ${C.fSSmallTable};
  text-transform: capitalize;
  width: ${({width}) => R.or(width, 'max-content')} ;
  padding: 10px 15px;
  &.small {
    height: 35px;
  }
  &.gradient {
    background: linear-gradient(90deg, #D3136D 0%, #F4892B 100%);
  }
  &.blackL {
    color: ${C.llGrey};
    background-color: ${C.lightGrey};
  }
  &:active,
  &:focus,
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 2px 20px rgba(30, 27, 28, 0.14);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${C.maxWidth};
  min-width: ${C.minWidth};
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: ${C.fSLLLaptop};
  font-family: Roboto, RobotoRegular;
  line-height: ${C.lHBigDesktop};
  text-transform: uppercase;
  color: ${C.pink};
  &.gradient {
    ${gradient};
  }
  &.black {
    color: ${C.dark};
  }
  ${largeFontSizeH2};
  ${commonPadding};
  ${commonMargin};
  ${container};
`;

export const H3 = styled.h3`
  color:${C.pink};
  margin: 15px 0;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  font-family: Roboto, RobotoRegular;
  font-size: ${C.fSLLaptop};
  text-transform: uppercase;
  line-height: ${C.lHBigLaptop};
  ${commonPadding};
`;

export const H4 = styled.h4`
  color: ${C.blackL};
  margin: 15px 0;
  text-align: left;
  font-weight: bold;
  font-style: normal;
  font-family: Roboto, RobotoRegular;
  font-size: ${C.fSBigTable};
  line-height: ${C.lHMediumLaptop};
  ${commonPadding};
`;

export const H5 = styled.h5`
  color:${C.pink};
  margin: 15px 0;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  font-family: Roboto, RobotoRegular;
  line-height: $lHMTable;
  text-transform: uppercase;
  font-size: ${C.fSMediumTable};
  ${largeFontSizeH3};
  ${largeFontSizeH2};
  ${commonPadding};
`;

export const H6 = styled.h6`
  color:${C.blackL};
  margin: 15px 0;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  font-family: Roboto, RobotoRegular;
  line-height: ${C.lHBPhone};
  text-transform: uppercase;
  font-size: ${C.fSMediumTable};
  ${largeFontSizeH6};
  ${commonPadding};
`;

export const InfoWrap = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin: 15px 0;
  display: flex;
  font-size: 15px;
  align-items: center; 
  white-space: normal;
  .icon-wrap {
    margin: 0 5px;
    height: 20px;
    width: 20px;
  }
  & + &.uppercase {
    display: none;
  }
  &.uppercase {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* & > h5 {
    font-size: ${C.fSMediumTable};
    font-weight: 600;
  } */
  & > h6, h5 {
    font-weight: 600;
    line-height: ${C.lHBPhone};
    text-transform: capitalize;
    font-size: ${C.fSMediumTable};
  }
  & > p {
    margin: 30px 0;
    text-align: center;
  }
  & form {
    width: 80%;
    & button {
      margin: auto;
    }
  }
`;
