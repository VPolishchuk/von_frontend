import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/detail-guide/1.png';
// ui
import * as C from '../../../ui/constant';
import { commonPadding } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaMain = css`
 @media (min-width: ${C.phone}) {
    height: 100vh;
    background-size: 100% 100%;

    & + .container {
      display: flex;
      justify-content: space-between;

      & button {
        &.left.small {
          margin: 0;
        }
      }

      .left-box,
      .right-box {
        padding: 30px 15px;
        border-radius: 5px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
      }
      .left-box {
        width: 70%;

        .info-wrap {
          display: none;
          width: max-content;

          &.uppercase:first-child {
            display: flex;
          }
        }

        p + hr,
        .day-wrap,
        .day-wrap + button {
          display: none;
        }

        & > div {
          display: flex;
          padding: 15px 0;
          align-items: center;
          justify-content: space-between; 
          h4 + button {
            display: flex;
            margin: 0 15px;
          }
        }
      }

      & > .left-box + .right-box {
        width: 28%;
        display: flex;
        flex-direction: column;

        .day-wrap {
          p {
            font-size: ${C.fSMediumPhone};
          }
        }

        .info-wrap {
          margin: 10px 0;
          padding: 15px 0;
          text-align: left;
          &.uppercase {
            color: ${C.pink};
          }
        }
          
      }
    }
  }
`;

export const MainSectionBlock = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${BgMain}) no-repeat center;
  background-size: cover;
  & > div {
    background: linear-gradient(191.85deg, #000000 -11.45%, rgba(0, 0, 0, 0.1) 75.3%);
    width: 100%;
    height: 100%;
  }
  & +   .container {
    padding-bottom: 20%;

    .left-box + .right-box {
      display: none;
    }

    .left-box {

      & > div {
        h4 + button {
          display: none;
        }
      }
    }

    & p {
      text-align: justify;
      white-space: normal;
      color: ${C.llGrey};
      margin: 15px 0;
    }

    & button {
      height: 50px;
      margin: 25px auto 35px;
      text-transform: capitalize;
      &.left.small {
        height: 30px;
        padding: 0 15px;
        width: max-content;
        font-weight: normal;
        margin: 1em 0 1em 1em;
      }
      & span {
        height: 20px;
        width: 20px;
        margin: 0 5px;
      }
    }
  }
  ${mediaMain};
`;

export const DayWrap = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  line-height: ${C.lHSPhone};
  font-size: ${C.fSMediumPhone};
  justify-content: space-between; 
  & p {
    font-weight: 500;
  }
  & > span {
    color: #9C9696;
    ${commonPadding};
  }
`;
