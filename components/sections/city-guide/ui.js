import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/city-guide/bg-main.png';
// ui
import * as C from '../../../ui/constant';
import {
  Container,
  gridWrap,
  gradient,
  sectionMargin } from '../../../ui';
// ///////////////////////////////////////////////////////

const mediaSection = css`
  @media (min-width: ${C.phone}) {
    height: 70vh;
    & > div {
      flex-direction: column;
      .form-wrap {
        max-width: ${C.maxWidth};
        height: max-content;
        position: static;
        & ~ form {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
  @media (min-width: $tablets) {
    height: 70vh;
    & > div {
      .form-wrap {
        position: static;
      }

    }
  }
  @media (min-width: $desktops) {
    height: 70vh;
    & > div {
      .form-wrap {
        position: static;
      }
    }
  }
`;

export const SectionWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${BgMain}) no-repeat 50% 0%; 
  background-size: 100% 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(191.27deg, #000000 -11.45%, rgba(0, 0, 0, 0.1) 75.3%);
    width: 100%;
    height: 100%;
    & > h2 {
      color: ${C.white};
      margin-bottom: 0.5em;
      text-transform: capitalize;
    }
    .form-wrap {
      width: calc(100% - 10%);
      height: max-content;
      position: absolute;
      bottom: -4%;
      left: 5%;            
    }
  }
  ${mediaSection}
`;

export const ContainerSec = styled(Container)`
  ${sectionMargin};
  & > h2 {
    margin-bottom: 30px;
  }
  
  & button {
    height: 50px;
    margin: 25px auto 35px;
    text-transform: capitalize;
    & span {
      height: 20px;
      width: 20px;
      margin: 0 5px;
  }
  }

  & > p {
    text-align: left;
    &.second {
      text-align: left;
      line-height: ${C.lHMPhone};
    }
    & > span {
      color: ${C.pink};
      &.gradient {
        ${gradient};
      }
    }
  }
  ${sectionMargin};
`;

const madiaPlaceWrap = css`
  @media (min-width: ${C.phone}) {
    .place-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > button {
        margin: 15px;
        align-self: flex-start;
      }
    }
  }
`;

export const GridWrap = styled.div`
  ${gridWrap};
  .place-wrap {
    box-shadow: 0px 2px 20px rgba(30, 27, 28, 0.14);
    border-radius: 10px;
    & > img {
      margin: 15px 0;
      width: 100%;
      height: auto;
      margin-top: 0;
      border-radius: 10px;
      object-fit: cover;
    }
    p {
      width: 100%;
      padding: 0.5rem 1rem;
      color: ${C.darkGrey};
      font-weight: bold;
      font-size: ${C.fSMediumTable};
    }
    p + p {
      color: ${C.pink};
      font-weight: normal;
      font-size: ${C.fSMediumPhone};
    }
  }
  ${madiaPlaceWrap};
`;
