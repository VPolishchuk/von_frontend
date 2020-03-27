import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/apartments-type-page/bg-main.png';
// ui
import * as C from '../../../ui/constant';
import { commonPadding } from '../../../ui';
// ///////////////////////////////////////////////////////

const mediaSections = css`
  @media (min-width: ${C.phone}) {
    height: 75vh;

    & + .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      & button {
        &.left.small {
          margin-left: 0;
        }
      }
      .left-box,
      .right-box {
        border-radius: 5px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
      }
      & > .left-box {
        width: 70%;
        padding: 30px 15px;
        .place-box {
          div + div {
            p {
              width: 45%;
            }
          }
        }
        .rental-conditions-box {
          width: max-content;
        }
      }
      & > .left-box + .right-box {
        width: 28%;
        height: max-content;
        display: flex;
        padding: 0 0 30px ;      
        flex-direction: column;
        & > h5 {
          display: none;
        }
        .location-map {
          margin-top: 0;
        }
        .location-map + h5 {
          display: block;
          padding: 0 1rem;
        }
        & p {
          padding: 0 1rem;
        }
      }
    }
  }
`;

export const SectionWrap = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${BgMain}) no-repeat center;
  background-size: cover;
  & > div {
    background: linear-gradient(191.85deg, #000000 -11.45%, rgba(0, 0, 0, 0.1) 75.3%);
    height: 100%;
    width: 100%;
  }

  & + .container {
    display: flex;
    padding-bottom: 20%;
    flex-direction: column;

    .left-box {
      h3 {
        text-align: left;
        color: ${C.blackL};
      }

      button + p {
        color: $darkGrey;
        margin: 10px 0;
        text-transform: initial;
      }

      .ap-info-wrap {
        width: 100%;
        display: flex;
        padding: 20px 0;
        flex-direction: column;
        & h5 {
          width: 100%;
          color: ${C.pink};
          text-transform: uppercase;
          ${commonPadding};
        }
        & > div {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          ${commonPadding};
          & p {
            padding: 0;
          }
        }
      }

      .place-box {
        display: flex;
        flex-direction: column;
        & > div {
          p {
            color: ${C.blackL};
            font-weight: bold;
            & > span {
              color: ${C.lllGrey};
              margin-right: 10px;
              font-weight: normal;
              text-transform: capitalize;
            }
          }
        }
        div + div {
          display: flex;
          flex-wrap: wrap;
          p {
            width: 100%;
            font-weight: normal;
            margin: 10px 10px 0 0;
            text-transform: capitalize;
          }
        }
      }

      .amenities-box {
        display: flex;
        padding: 10px;
        margin: 1% 1% 0 0;
        border-radius: 5px;
        align-items: center;         
        justify-content: center;
        background-color: ${C.dwhite};
        span {
          margin: 0 5px;
        }
      }

      .rental-conditions-box {
        display: flex;
        width: 100%;
        margin: 10px 15px 0 0;
        flex-direction: column;
        & span {
          color: ${C.lllGrey};
          margin: 7px 0;
          text-transform: capitalize;
        }
        & p {
          color: ${C.blackL};
          font-weight: bold;
        }
      }
      .bill-box {
        display: flex;
        margin: 10px 15px 0 0;
        & span {
          color: ${C.blackL};
        }
        span + span {
          margin: 0 10px;
        }
      }
    }
    & h5 {
      color: ${C.blackL};
      margin: 15px 0;
      text-align: left;
      text-transform: capitalize;
    }
    & p {
      color: ${C.llGrey};
      text-align: left;
      white-space: normal;
      padding-bottom: 20px;
    }
    & button {
      height: 50px;
      padding: 10px 15px;
      margin: 25px auto 35px;
      text-transform: capitalize;
      &.left.small {
        height: 30px;
        padding: 0 15px;
        width: max-content;
        font-weight: normal;
        margin: 15px 0 15px 15px;
      }
      & span {
        width: 20px;
        height: 20px;
        margin: 0 5px;
      }
    }
    .right-box {
      & h5 {
        color: ${C.pink};
        text-transform: uppercase;
      }
      .location-map {
        width: 100%;
        height: 250px;
        background-color: ${C.blackL};
        margin: 15px 0;
      }
      .location-map + h5 {
        display: none;
      }
      & > p {
        color: ${C.blackL};
        margin: 10px 0;
        font-weight: 500;
        & > span {
          color: ${C.blackL};
          font-weight: normal;
        }

      }
    }
  }
  ${mediaSections}
`;
