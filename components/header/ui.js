import styled, { css } from 'styled-components';
import * as C from '../../ui/constant';
import Fb from '../../public/static/social/facebook.png';
import Ins from '../../public/static/social/instagram.png';
import Ln from '../../public/static/social/linkedin.png';
import {downArrow} from '../../ui/common';
// //////////////////////////////////////////////

const mediaMinWidthStyles = css`
  @media (min-width: ${C.phone}) {
    & .container {
      img + .search-input {
        display: flex;
        justify-content: flex-end;
        & > div {
          width: max-content;
        }
      }
      nav {
        height: 100%;
        min-height: 100%;
        position: unset;;
        transition: transform 0.4s;
        transform: translateY(0vh);
        & > .mob-nav-bar {
          display: none;
        }
        & .link-wrap {
          display: flex;
          min-height: 100%;
          min-width: 150px;
          color: ${C.white};
          font-weight: bold;
          position: relative;
          align-items: center;
          height: max-content;
          translate: all 0.4s;
          flex-direction: column;
          text-transform:capitalize;
          font-size: ${C.fSMediumPhone};

          & > div {
            display: flex;
            align-items: center;
            height: 60px;
            width: 100%;
            justify-content: space-between;
            padding: 0 15px;
            & > .down-arrow {
              ${downArrow};
              margin: 0 5px;
              width: 20px;
              height: 20px;
            }
          }
          div + div {
            display: none;
          }
          &:hover div + div {
            display: flex;
            position: absolute;
            translate: all 0.4s;
            left: 0;
            top: 60px;
            flex-direction: column;
            padding: 0;
            height: max-content;
            background: rgba(0, 0, 0, 0.28);
            border-radius: 0px 0px 5px 5px;
            & a {
              display: flex;
              height: 60px;
              align-items: center;
              width: 100%;
              padding: 0 15px;
              justify-content: flex-start;
              &:hover {
                color: ${C.pink};
                background-color: ${C.white};
              }
            }
          }
          &.active,
          &:hover {
            background: rgba(0, 0, 0, 0.28);
            cursor: pointer;
          }
        }
      }
      img {
        margin: 0;
        object-fit: none;
        object-position: center;
      }
      .search-input + .burger {
        display: none;
      }
    }
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  position: fixed;
  transition: all 0.5s;
  &.black {
    transition: all 0.4s;
    background-color: ${C.dark};
  }
  & .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &  > div, img, nav {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      margin: 0 15px;
      cursor: pointer;
      object-fit: none;
      object-position: left;
    }
    img + .search-input {
      display: none;
    }
    .burger {
      flex: none;
      position: relative;
      width: 40px;
      height: 4px;
      cursor: pointer;
      border-radius: 2px;
      margin: 0 15px;
      background-color: ${C.white};
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        width: 40px;
        bottom: -10px;
        height: 4px;
        border-radius: 2px;
        transition: all 0.3s;
        background-color: ${C.white};
      }
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        top: -10px;
        height: 4px;
        border-radius: 2px;
        transition: all 0.3s;
        background-color: ${C.white};
      }
      &.active {
        height: 0;
        z-index: 9990;
        cursor: pointer;
        background-color: ${C.blackL};
        &::after {
          top: 0;
          transition: all 0.3s;
          background-color: ${C.blackL};
          transform: rotateZ(-45deg);
        }
        &::before {
          top: 0;
          transition: all 0.3s;
          background-color: ${C.blackL};
          transform: rotateZ(45deg);
        }
      }
    }
    nav {
      position: fixed;
      z-index: 999;
      bottom: 0;
      left: 0;
      transition: transform 0.4s;
      transform: translateY(-200vh);
      &.active {
        transform: translateY(0vh);
      }
      & > .link-wrap {
        display: none;
      }
      & > .mob-nav-bar {
        height: 100vh;
        width: 100vw;
        display: flex;
        overflow: scroll;
        flex-direction: column;
        background-color: rgba(1, 1, 1, 0.6);
        & > div {
          width: 100%;
          height: max-content;
          display: flex;
          flex-direction: column;
          padding: 15px 0;
          background-color: ${C.white};
          border-radius: 0px 0px 10px 10px;
          box-shadow: 0px 2px 20px rgba(30, 27, 28, 0.14);
          & .search-input {
            width: 100%;
            height: 30px;
            display: flex;
            margin: 15px 0;
          }
          & .link-wrap {
            width: 100%;
            display: flex;
            min-height: 30px;
            color: ${C.blackL};
            height: max-content;
            align-items: center;
            flex-direction: column;
            text-transform:capitalize;
            transition: transform 0.4s;
            justify-content: space-between;
            &.active {
              cursor: pointer;
            }

            &.active > div {
              &:first-child:hover {
                background: ${C.pink};
                color: ${C.white};
                cursor: pointer;
              }
            }
            & > div {
              display: flex;
              align-items: center;
              height: 30px;
              width: 100%;
              justify-content: space-between;
              padding: 0 15px;
              & > .down-arrow {
                ${downArrow};
                margin: 0 5px;
                width: 20px;
                height: 20px;
              }
            }
            &.active div + div {
              display: flex;
              transition: all 0.4s;
              flex-direction: column;
              padding: 0;
              height: max-content;
              & a {
                display: flex;
                height: 30px;
                align-items: center;
                width: 100%;
                color: ${C.llGrey};
                padding: 0 15px;
                justify-content: flex-start;
                &:hover {
                  background: ${C.pink};
                  color: ${C.white};
                  cursor: pointer;
                }
              }
            }
            div + div {
              display: none;
            }
          }
          .social-box {
            display: flex;
            width: 100%;
            justify-content: center;
            a {
              margin: 0 10px;
              cursor: pointer;
              &:hover {
                box-shadow: 0px 2.79914px 27.9914px rgba(30, 27, 28, 0.14);
              }
            }
            .facebook {
              width: 30px;
              height: 30px;
              background: url(${Fb}) no-repeat center;
              background-size: cover;
            }
            .instagram {
              width: 30px;
              height: 30px;
              background: url(${Ins}) no-repeat center;
              background-size: cover;
            }
            .linkedin {
              width: 30px;
              height: 30px;
              background: url(${Ln}) no-repeat center;
              background-size: cover;
            }
          }
        }
      }
    }
  }
  ${mediaMinWidthStyles}
`;
