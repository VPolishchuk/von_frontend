import styled, { css } from 'styled-components';
// ui
import * as C from '../../../ui/constant';
import {
  downArrow,
  Container,
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const media = css`
  @media (min-width: ${C.phone}) {
    & h2 {
      margin: 35px 0;
    }
  }
`;

export const ContainerSec = styled(Container)`
  ${sectionMargin}
  & h2 {
    padding-top: 50px;
  }
  .question-wrap {
    margin: 2% 0;
    display: flex;
    padding: 15px;
    border-radius: 5px;
    height: max-content;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
    &.active {
      margin: 20px 0;
    }
    & > div {
      display: flex;
      align-items: center;
      transition: all 0.4s;
      justify-content: space-between;
    }
    & p {
      height: 0;
      width: 100%;
      visibility: hidden;
      &.active {
        visibility: visible;
        height: max-content;
        transition: all 0.2s;
      }
    }
    h5 {
      color: ${C.dark};
      text-align: left;
      transition: all 0.2s;
      text-transform: capitalize;
      &.active {
        color: ${C.pink};
        transition: all 0.2s;
        font-size: ${C.fSBigTable};
      }
    }
    .down-arrow {
      ${downArrow};
    }
  }
  ${media}
`;
