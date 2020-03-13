import styled, { css } from 'styled-components';
// ui
import * as C from '../../../ui/constant';
import { Container } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const media = css`
  @media (min-width: ${C.phone}) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
    & > .sing-up-wrap {
      width: 80%;
      height: 70%;
      display: flex;
      min-height: 370px;
      max-height: 430px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
      border-radius: 5px 0px 0px 5px;
      & >.left-box {
        display: block;
        width: 50%;
        height: 100%;
        object-fit: none;
      }
      & > .main-form {
        width: 50%;
      }
    }
  }

  @media (min-width: ${C.desktops}) {
    & .sing-up-wrap {
      width: 60%;
      height: 50%;
    }
  }
`;

export const SingInWrap = styled.div`
  height: 100vh;
  width: 100%;
  & > .left-box {
    display: none;
  }
  & > .main-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    justify-content: center;

    legend {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: ${C.fSLaptop};
      text-align: center;
      line-height: ${C.lHBigLaptop};
      text-transform: capitalize;
      color: ${C.blackL};
    }

    & button {
      width: 100%;
      height: 50px;
      margin: 0 auto;
    }

    & > p {
      margin: 5px 0;
      text-align: center;
      font-size: ${C.fSMediumPhone};
      text-transform: capitalize;
      color: ${C.black};
      & > a {
        margin-left: 5px;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

`;

export const FormContainer = styled(Container)`
  ${media};
`;
