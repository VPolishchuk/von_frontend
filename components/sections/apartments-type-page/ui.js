import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/apartments-type-page/bg-main.png';
// ui
import * as C from '../../../ui/constant';
import {gridWrap} from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaApartmendWrap = css`
  @media (min-width: ${C.phone}) {
    & > div {
      align-items: flex-end;
      justify-content: center;
      .form-wrap {
        position: unset;
        margin-bottom: 5%;
      }
      .form-wrap,
      h2 {
        width: 100%;
        text-align: left;
        max-width: ${C.maxWidth};
      }
    }
    & + .container {
      & > h2 {
        display: none;
      }
    }
  }

  @media (min-width: $tablets) {
    height: 80vh;
  }

  @media (min-width: ${C.desktops}) {
    height: 70vh;
  }
`;

export const ApartmentsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${BgMain}) no-repeat center;
  background-size: 100% 100%;
  & > div {
    background: linear-gradient(185.2deg, #050505 -56.47%, rgba(0, 0, 0, 0.13) 89.18%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & .form-wrap {
      width: calc(100% - 10%);
      height: max-content;
      position: absolute;
      bottom: -4%;
      left: 5%;            
      & > h2 {
        color: ${C.white};
        margin-bottom: 15px;
        text-transform: capitalize;
      }
    }
  }
  & + .container {
    padding-top: 50px;
    padding-bottom: 120px;
    & > h2 {
      color: ${C.pink};
      text-transform: capitalize;
    }
  }
  ${mediaApartmendWrap}
`;

const mediaGridWrap = css`
  @media (min-width: ${C.phone}) {
    .apartment-wrap {
      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        & > div {
          width: max-content
        }
        & > button {
          margin: 0;
        }
      }
    }
  }
`;

export const GridWrap = styled.div`
  ${gridWrap};
  .apartment-wrap {
    width: 100%;
    display: flex;
    height: max-content;
    align-items: center;
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      & p {
        margin: 5px 0;
        font-weight: 500;
        span {
          font-weight: bold;
        }
      }
      & > button {
        height: 50px;
        margin: 25px auto;
        & span {
          margin: 0 7px;
        }
      }
    }
    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 20px;
    }
  }
  ${mediaGridWrap}
`;
