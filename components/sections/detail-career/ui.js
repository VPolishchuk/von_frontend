import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/home-page/bg-main.png';
import Fb from '../../../public/static/social/facebook.png';
import Ins from '../../../public/static/social/instagram.png';
import Ln from '../../../public/static/social/linkedin.png';
import Lf1 from '../../../public/static/home-page//lifestyle/1.png';
import BgLoc from '../../../public/static/home-page/bg-locations.png';
// ui
import * as C from '../../../ui/constant';
import {
  Container,
  commonPadding,
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaSec = css`
  @media (min-width: ${C.phone}) {
    & {
      .career-wrap {
        padding: 0 15px;

        & .info-wrap {
          padding: 0;
        }
        img {
          object-fit: none;
          height: auto;
          width: 20%;
        }

        h3 + div {
          display: flex;
          justify-content: space-between;
          span + span {
            color: ${C.darkGrey};
            line-height: 3px;
            text-transform: initial;
          }
        }

        button {
          align-self: flex-start;
          margin: 1em 0 ;
        }
      }

      #job-form {
        width: 60%;
        margin-top: 50px;
        min-width: 320px;
        padding: 30px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
  
        legend {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: ${C.pink};
          margin: 20px 0;
        }
        & > div {
          display: flex;
          align-items: flex-start;
          & > button {
            margin: 10px;
          }
          & > div {
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            & > .input-wrap {
              width: 46%;
              position: relative;
              & > label {
                color: ${C.blackL};
              }
            }
          }
        }
      }
    }
  }
`;

export const ContainerSec = styled(Container)`
  ${sectionMargin}

  .route-wrap {
    padding: 20px 0;
    & a {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      color: ${C.pink};
      font-size: ${C.fSBigPhone};
      .icon-wrap {
        margin-right: 15px;
        transform: rotateZ(90deg); 
      }
    }
  }

  .career-wrap {
    width: 100%;
    display: flex;
    padding: 15px 0;
    border-radius: 5px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);

    img {
      object-fit: none;
      height: auto;
      width: 100%;
    }

    h3 {
      text-align: left;
      color: ${C.darkGrey};
      margin: 10px 0;
    }

    h3 + div {
      ${commonPadding};
      span {
        color: ${C.pink};
        display: block;
        text-align: left;
        font-weight: normal; 
        font-size: ${C.fSBigPhone};
        line-height: ${C.lHMPhone};
        text-transform: uppercase;
      }
      span + span {
        color: ${C.darkGrey};
        text-transform: initial;

      }
    }

    & .info-wrap {
      width: 100%;
      margin: 15px 0;
      display: flex;
      color: ${C.darkGrey};
      font-weight: bold;
      font-family: Roboto;
      align-items: center; 
      font-size: ${C.fSBigPhone};
      ${commonPadding};
      .icon-wrap {
        margin: 0 5px;
        height: 20px;
        width: 20px;
      }
    }

    hr {
      margin: 10px 0;
    }

    h5 {
      color: ${C.pink};
      margin: 15px 0;
      text-align: left;
      font-weight: bold;
      font-size: ${C.fSMediumLaptop};
    }

    p {
      text-align: justify;
      line-height: ${C.lHMPhone};
    }

    button {
      align-self: flex-start;
      margin: 1em 0 25px 1em;
    }
  }

  & {
    .career-wrap + #job-form {
      display: none;
    }
  }
  ${mediaSec}
`;
