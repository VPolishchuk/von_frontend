import styled, { css } from 'styled-components';
import BgMain from '../../../public/static/careers-page/bg-main.png';
// ui
import * as C from '../../../ui/constant';
import {
  Container,
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

export const MainSectionWrap = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${BgMain}) no-repeat center center;
  background-size: cover;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(92.47deg, rgba(31, 30, 30, 0.51) 37.31%, rgba(0, 0, 0, 0) 100.4%);
    h2 {
      color: ${C.white};
      text-transform: capitalize;
    }
  }
`;

const mediaContainer = css`
  @media (min-width: ${C.phone}) {
    .career-wrap {
      & > div {
        display: flex;
        padding: 5px 0;
        align-items: center;
        justify-content: space-between;

        h6 + button {
          margin: 0;
          height: 50px;
          display: flex;
          padding: 0 15px;
        }
      }
      p + button {
        display: none;
      }
    }
  }
`;

export const ContainerSec = styled(Container)`
  ${sectionMargin};
  display: flex;
  flex-direction: column;
  & > h2 {
    text-transform: capitalize;
  }
  .career-wrap {
    padding: 15px;
    margin: 7px 0;
    border-radius: 5px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
    & > div {
      display: flex;
      h6 {
        padding: 0;
        margin: 7px 0;
        text-align: left;
        color: ${C.darkGrey};
        text-transform: capitalize;
      }
      h6 + button {
        display: none;
      }
    }

    div + span {
      color: ${C.pink};
      text-transform: uppercase;
      font-weight: bold;
    }

    span + div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 7px 0; 
      font-weight: bold;
      color: ${C.darkGrey};
      .location-icon {
        margin-right: 10px;
      }
    }
    p {
      padding: 0;
      color: ${C.dark};
    }

    p + button {
      margin: 1rem 0;
    }
  }
  ${mediaContainer}
`;
