import styled, { css } from 'styled-components';
// ui
import * as C from '../../../ui/constant';
import {
  Container,
  commonPadding,
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaSec = css`
  @media (min-width: ${C.phone}) {
    .career-wrap {
      padding: 0 15px;

      & .info-wrap {
        padding: 0;
      }
      img {
        object-fit: unset;
        height: auto;
        width: 20%;
      }

      h3 + div {
        display: flex;
        justify-content: space-between;
        span + span {
          color: ${C.darkGrey};
          text-transform: initial;
          & b {
            font-size: ${C.fSMediumLaptop};
          }
        }
      }

      button {
        align-self: flex-start;
        margin: 1em 0 ;
      }
    }

    .career-wrap + #job-form {
      width: 60%;
      margin-top: 50px;
      min-width: 320px;
      padding: 30px;
      display: block;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);

      legend {
        font-family: RobotoRegular;
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
        flex-wrap: wrap;
        align-items: flex-start;
        & > button {
          margin: 14px 10px;
        }
        & > div {
          width: 80%;
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          justify-content: space-between;
          & > .input-wrap {
            width: 49%;
            position: relative;
            & > label {
              color: ${C.blackL};
            }
          }
          & .file {
            width: 49%;
            min-width: 220px;
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
      object-fit: scale-down;
      height: auto;
      width: 100%;
    }

    h3 {
      margin: 10px 0;
      font-weight: 700;
      text-align: left;
      color: ${C.darkGrey};
      font-size: ${C.fSLaptop};
      text-transform: capitalize;
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
      font-family: RobotoRegular;
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
      font-size: ${C.fSMediumTable};
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

  .career-wrap + #job-form {
    display: none;
  }
  ${mediaSec}
`;
