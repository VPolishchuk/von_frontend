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
  gradient,
  container,
  gridWrap,
  sectionMargin } from '../../../ui';
// ///////////////////////////////////////////////////////

const mediaBookWrap = css`
  @media (min-width: ${C.phone}) {
    display: flex;
    height: max-content;
    & > .left-box {
      width: 35%;
      height: auto;
      display: flex;
      padding-top: 80px;
      align-items: flex-end;
      background: #F9F9F9;
      flex-direction: column;
      justify-content: flex-start;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
      .title-wrap {
        display: flex;
        margin: 15px 0;
        width: 270px;
        align-items: center;
        justify-content: flex-start;
        .status-circle {
          background: ${C.white};
          width: 50px;
          height: 50px;
          color: ${C.llGrey};
          margin-right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);

        }
        &.active p, 
        &.active  .status-circle   {
          color: ${C.pink};
          font-weight: bold;
        }
        p {
          color: #000;
          text-transform: capitalize;
        }
      }
    }
    & > .booking-form {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 80px;
      padding-left: 30px;
      position: relative;
      height: max-content;
      flex-direction: row;
      justify-content: space-between;
      legend {
        margin: 15px 0;
        font-size: 36px;
        text-align: left;
        line-height: 42px;
      }
      & .input-wrap {
        width: 45%;
        margin: 10px 0;
        &.file {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      .review-wrap {
        flex-direction: row;
        & hr {
          display: none;
        }
        & > .left-wrap, .docs-wrap {
          flex-direction: column;
        }
      }
      & + div {
        display: none;
      }
    }
  }
`;

export const BookingWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  & >.left-box {
    display: none;
  }
  & > .booking-form {
    width: 100%;
    height: max-content;
    padding: 80px 15px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    legend {
      width: 100%;
      color: ${C.pink};
      margin: 15px 0;
      font-size: 28px;
      font-weight: bold;
      line-height: 30px;
      text-align: center;
      font-family: Roboto;
      text-transform: capitalize;
    }

    .review-wrap {
      width: 100%;
      display: flex;
      height: max-content;
      flex-direction: column;
      .left-wrap {
        width: 100%;
        display: flex;
        height: max-content;
        flex-direction: column;
        & > div {
          width: 100%;
          margin: 7px;
          & > span {
            color: $lightGrey;
            font-size: ${C.fSSmall};
            text-transform: capitalize;
          }
          & > p {
            margin: 5px 0;
            color: ${C.blackL};
            padding: 0;
          }
        }
      }
      .docs-wrap {
        width: 100%;
        display: flex;
        height: max-content;
        flex-direction: column;
        & > p {
          text-align: left;
          color: #000;
          padding: 0;
          margin: 10px 0;
        }
        & > div {
          display: flex;
          flex-wrap: wrap;
          & > span {
            margin-right: 10px;
          }
        }
      }
    }

    .bottom-wrap {
      display: flex;
      width: 100%;
      height: 50px;
      margin-top: 20px;
      justify-content: space-between;
      & > button {
        height: 50px;
        width: 45%;
        margin: 0;
      }
    }
    .bottom-wrap + div {
      width: 100%;
      height: 30px;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & span {
        width: 20px;
        height: 20px;
        margin: 0 5px;
        border-radius: 50%;
        border: 1px solid ${C.blackL};
        &.active {
          background-color: ${C.pink};
          border: 1px solid ${C.pink};
        }
      }
    }
    & .input-wrap {
      &.file {
        margin: 10px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label {
          width: 45%;
        }
      }
    }
    & > p {
      margin: 5px 0;
      text-align: center;
      font-size: ${C.fSMediumPhone};
      text-transform: capitalize;
      color: #000000;
      & > a {
        font-weight: bold;
        margin-left: 5px;
        text-decoration: underline;
      }
    }
  }
  ${mediaBookWrap};
`;

const mediaLoad = css`
  @media (min-width: ${C.phone}) {
    width: 75%;
    height: 100vh;
  }
`;

export const LoadWrap = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  translate: all 0.3s;
  justify-content: center;
  background-color: ${C.white};
  ${mediaLoad};
`;

export const LoaderBox = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background-color: ${C.dark};
  & div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const CircleLoaderBox = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  & > div {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    animation: lds-circle 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
}
`;
