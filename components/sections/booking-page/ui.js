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
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaLocWrap = css`
  @media (min-width: $phone) {
    & {
      width: 100%;
      height: 60vh;
      padding: 0;
      background: url('../../../public/static/locations/bg-main.png') no-repeat center;
      background-size: 100% 100%;
      & > div {
        background: linear-gradient(185.2deg, #050505 -56.47%, rgba(0, 0, 0, 0.13) 89.18%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & h2 {
        color: $white;
      }
    }  
    & + .container {
      margin: 0 auto;
      padding-top: 50px;
    }
  }
`;

export const LocationsWrapper = styled.div`
  padding-top: 20vh;
  & h2 {
    color: $pink;
    text-transform: capitalize;
  }
  & + .container {
    margin: 0 auto;
    padding-bottom: 120px;
  }
  ${mediaLocWrap}
`;

const mediaGridWrap = css`
  @media (min-width: $phone) {
    .location-wrap {
      & > div {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        & p {
          padding: 0;
          line-height: $lHMediumLaptop;
          font-size: $fSBigTable;
          &.address {
            font-weight: normal;
            line-height: $lHMPhone;
            font-size: $fSBigPhone;
          }
        }
        & > bottom {
          margin: 0;
        }
      }
    }
  }
`;

export const GridWrap = styled.div`
  ${gridWrap};
  .location-wrap {
    width: 100%;
    display: flex;
    height: max-content;
    align-items: center;
    flex-direction: column;
    & button {
      height: 50px;
      margin: 25px auto 35px;
      & span {
        margin: 0 7px;
      }
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      & p {
        width: 100%;
        margin: 5px 0;
        // padding: 0 15px;
        font-weight: 500;
        line-height: $lHMPhone;
        font-size: $fSSmallTable;
        &.address {
          font-weight: normal;
          line-height: $lHSPhone;
          font-size: $fSMediumPhone;
        }
      }
    }
    & > img {
      width: 100%;
      height: 300px;
      margin: 20px 0;
      object-fit: cover;
    }
  }
  ${mediaGridWrap}
`;

const mediaVWrap = css`
  @media (min-width: $phone) {
    & {
      display: flex;
      position: relative;
      justify-content: space-between;
      & button {
        padding: 10px 15px;
      }
      &.first {
        margin-top: 60px;
      }
      & > img {
        width: 45%;
      }
      & > div {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        h2 {
          color: $pink;
          text-align: left;
        }
        p {
          font-size: 24px;
          line-height: 40px;
          text-align: left;
          padding: 0 20px 0 0;
          color: $blackL;
        }
        button {
          margin: 15px 0;
        }
      }
      h2 + img {
        display: none;
      }
      div + img {
        display: block;
      }
    }
    &.two {
      & > img {
        display: block;
      }
    }
  }
`;

export const VWrap = styled.div`
  width: 100%;
  & button {
    height: 50px;
    width: max-content;
    padding: 0 15px;
    margin: 25px auto 35px;
    & span {
        margin: 0 7px;
    }
  }
  & h2 {
    margin: 50px 0;
    padding: 0 15px;
  }
  & p {
    & > span {
      color: $pink;
    }
  }
  div + img {
    display: none;
  }
  & img {
    margin: 25px 0;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &.two {
    & > img {
      display: none;
    }
  }
  ${mediaVWrap}
`;
