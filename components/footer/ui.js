import styled, { css } from 'styled-components';
import * as C from '../../ui/constant';
import FLogo from '../../public/static/logo-footer.png';
// ///////////////////////////////////////
const mediaMinWidthStyles = css`
  @media (min-width: ${C.phone}) {
    & {
      height: 100px;
      .container {
        flex-wrap: nowrap;
        justify-content: space-between;
        .contacts {
          width: max-content;
        }
        .footer-logo {
          padding: 15px;
        }
        .footer-logo + nav {
          display: flex;
          width: 40%;
          height: auto;
          padding: 0;
        }
        .contacts + nav {
          display: none;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: ${C.dark};
  height: 250px;
  .container {
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    padding: 15px;
    color: ${C.white};
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    .footer-logo {
      background-size: contain;
      width: 86px;
      height: 80px;
      background: url(${FLogo}) no-repeat center;
    }
    .footer-logo + nav {
      display: none;
    }
    nav {
      padding-top: 15px;
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      height: calc(100% - 110px);
      flex-direction: column;
      a {
        width: 50%;
        margin: 5px 0;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .contacts {
      padding-left: 10px;
      width: calc(100% - 100px);
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-around;

      font-family: RobotoRegular;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      align-items: flex-start;
    }
  }
  ${mediaMinWidthStyles}
`;
