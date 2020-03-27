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
  sectionMargin } from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaStyleS1 = css`
  @media (min-width: ${C.phone}) {
    &.section-1 {
      background: url(${BgMain}) no-repeat center; 
      background-size: 100% 100%; 
      & > div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 5vh;
        .form-wrap {
            max-width: ${C.maxWidth};
            width: calc(100% - 12%);
            height: max-content;
            position: unset;
            & ~ form {
              display: flex;
              flex-direction: row;
            }
        }
      }
    }
  }
  @media (min-width: ${C.tablets}) {
    .form-wrap {
      width: calc(100% - 30%);
      bottom: 12%;
      left: 15%;
    }
  }
  @media (min-width: ${C.desktops}) {
    .form-wrap {
      width: calc(100% - 50%);
      bottom: 12%;
      left: 25%;
    }
  }
`;

export const Section1 = styled.div`
  position: relative;
  background: url(${BgMain}) no-repeat center; 
  background-size: cover;
  height: 100vh;
  width: 100%;
  & > div {
    background: linear-gradient(180deg, #000000 -24.71%, rgba(0, 0, 0, 0.1) 79.13%);
    width: 100%;
    height: 100%;
    .form-wrap {
      width: calc(100% - 10%);
      height: max-content;
      position: absolute;
      top: 75%;
      left: 5%;
      z-index: 12;        
    }
  }
  ${mediaStyleS1}
`;

const mediaStyleS2 = css`
  @media (min-width: ${C.phone}) {
    padding-top: 0;
    margin-top: 70px;
    & p {
      color: ${C.blackL};
      text-align: center;
      font-size: ${C.fSBigTable};
      line-height: ${C.lHMediumLaptop};
      &.second {
        text-align: left;
        margin-top: 20px;
        font-size: ${C.lHMTable};
        line-height: ${C.lHLaptop};
      }
      & > span {
        color: ${C.pink};
        &.gradient {
          ${gradient};
        }
      }
    }
    .image-wrap  {
      height: 100vh;
      height: 125vh;
      img.left,
      img.right {
        height: 47%;
        object-fit: contain;
      }
      .left {
        top: 0;
      }
      .right {
        bottom: 0;
      }  
    }
  }
`;

export const Section2 = styled.div`
  ${sectionMargin};
  padding-top: 230px;
  width: 100%;
  height: max-content;
  position: relative;
  display: flex;
  flex-direction: column;

  /* @keyframes textAnimation {
    from {
      opacity: 0;
      translate: transform(200px, 200px)
    } to {
      opacity: 1;
      translate: transform(0, 0)
    }
  } */

  p + h2 {
    margin-top: 50px;
  }
  h2 {
    /* animation: textAnimation 2s linear; */
    &:first-child {
      font-weight: 900;
      font-family: GothamProBlack;
      /* animation: textAnimation 2s linear; */
    }
  }
  & p {
    color: ${C.blackL};
    text-align: center;
    &.second {
      text-align: left;
      margin-top: 20px;
    }
    & > span {
      color: ${C.pink};
      &.gradient {
        ${gradient};
      }
    }
  }
  .image-wrap {
    margin: 40px 0;
    width: 100%;
    overflow: hidden;
    height: 125vh;
    position: relative;
    img.left,
    img.right {
      width: calc(100% - 5px);
      height: 48%;
      object-fit: fill;
      position: absolute;
    }
    .left {
      top: 0;
      left: -15px;
      object-position: left;
      -o-object-position: left;
    }
    .right {
      right: -15px;
      bottom: 0;
      object-position: right;
      -o-object-position: right;

    }  
  }
  ${mediaStyleS2};
`;

const mediaStyleS3 = css`
  @media (min-width: ${C.phone}) {
    .location-wrap  {
      height: 615px;
      background: url('${BgLoc}') no-repeat 100% 100%;
      background-size: 100% 100%;
      ul {
        padding-left: 22%;
        li {
          line-height: ${C.lHLaptop};
          font-size: ${C.fSMediumLaptop};
        }
      }
    }
  }
`;

export const Section3 = styled.div`
  ${sectionMargin};
  & > h2 {
    margin: 25px 0;
    &.left {
      text-align: left;
    }
  }
  & > .location-wrap {
    width: 100%;
    height: 500px;
    background-size: cover;
    background: url('${BgLoc}') no-repeat center;
    ul {
      padding-top: 80px;
      padding-left: 45px;
      list-style-type: none;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(99.22deg, #F8F8F8 46.58%, rgba(248, 248, 248, 0) 68.47%);
      li {
        display: flex;
        align-items: center;
        font-family: RobotoRegular;
        font-size: ${C.fSBigPhone};
        line-height: ${C.lHMPhone};
        text-transform: capitalize;
        color: ${C.blackL};
        cursor: pointer;
        margin: 15px 0;
        position: relative;

        &:hover {
          font-weight: bold;
          &::after {
            position: absolute;
            content: '→';
            top: 0;
            left: -30px;
            border-radius: 50%;
            border: 1px solid ${C.pink};
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  ${mediaStyleS3};
`;

const mediaStyleS4 = css`
  @media (min-width: ${C.phone}) {
    .services-wrap {
      grid-gap: 40px;
      grid-template-columns: repeat(3, 1fr);
      & > div {
        & > img {
          width: 90px;
          height: 90px;
          object-fit: contain;
        }
        & > p {
          text-align: center;
          line-height: ${C.lHMTable};
          font-size: $fSMediumTable;
        }
      }
    }
  }
`;

export const Section4 = styled.div`
  ${container};
  &.container {
    & > h2 {
      margin: 40px 0;
    }
  }
  ${sectionMargin};
  .services-wrap {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      & > img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
      & > p {
        margin-top: 15px;
        text-align: center;
        font-size: ${C.fSBigPhone};
        line-height: ${C.lHMPhone};
      }
    }
  }
  ${mediaStyleS4};
`;

const mediaStyleS5 = css`
  @media (min-width: ${C.phone}) {
    .experience-wrap {
      .img-text-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        .images.one {
          width: 60%;
          height: auto;
          object-fit: cover;
        }
        img + .title {
          height: auto;
          display: block;
          text-align: left;
          padding-left: 25px;
          font-size: ${C.fSBigLaptop};
          line-height: ${C.lHBigLaptop};
        }
        &.two {
          align-items: flex-start;
          justify-content: space-between;
          .images.two,
          .images.three {
            width: 45%;
            margin: 15px 4px;
            object-fit: cover;
            height: auto;
          }
        }
      }
      .img-text-wrap + .title {
        display: none;
      }
    }
  }
`;

export const Section5 = styled.div`
  ${sectionMargin};
  & {
    & > h2 {
      margin: 40px 0;
    }
  }
  .experience-wrap {
    width: 100%;
    position: relative;
    .img-text-wrap {
      .images.one {
        width: 100%;
        height: 40vh;
        min-height: 200px;
        object-fit: cover;
      }
      img + .title {
        display: none;
      }
    }
    .images.two {
      width: 50%;
      height: 40vh;
      min-height: 250px;
      object-fit: cover;
    }
    .images.three {
      width: 45%;
      height: 35vh;
      min-height: 200px;
      object-fit: cover;
    }
    .title {
      color: ${C.blackL};
      margin: 15px 0;
      font-weight: bold;
      text-align: center;
      line-height: ${C.lHLaptop};
      font-size: ${C.fSMediumLaptop};
      text-transform: capitalize;
      & > span {
        color: ${C.pink};
      }
    }
  }
  ${mediaStyleS5};
`;

const mediaStyleS6 = css`
  @media (min-width: ${C.phone}) {
    & > h2.container, p.container {
      margin: 30px auto;
      text-align: center;
    }

    h2 + p {
      display: block;
      line-height: ${C.lHLaptop};
      font-size: ${C.fSMediumLaptop};
    }
    .lifeStyle-img + p,
    p + .list-wrap,
    .list-wrap + h2 {
      display: none;
    }
    .lifeStyle-img {
      height: 95vh;
      background: url(${Lf1}) no-repeat 100% 100%;
      background-size: 100% 100%;
      & > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(358.2deg, rgba(16, 13, 13, 0.6789) 7.54%, rgba(16, 13, 13, 0.0949) 125.21%);
        & > ul,
        & > div {
          height: 50%;
          color: ${C.white};
        }
        ul {
          width: 100%;
          display: flex;
          list-style-type: none;
          justify-content: center;
          li {
            margin: 10px 15px;
            font-family: RobotoRegular;
            font-size: ${C.fSBigPhone};
            line-height: ${C.lHMPhone};
            text-align: left;
            color: ${C.white};
            position: relative;
            text-transform: capitalize;
            &:hover,
            &:active {
              font-weight: bold;
              &::after {
                position: absolute;
                content: '';
                top: 23px;
                left: 50%;
                width: 10px;
                height: 10px;
                display: flex;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                border: 1px solid ${C.white};
                background-color: ${C.white};
              }
            }
          }
        }
        div {
          display: flex;
          width: 80%;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          align-self: center;
          & > h2.gradient {
            margin: 0.1em 0;
            font-size: ${C.fSBigLaptop};
            line-height: ${C.lHBigLaptop};
          }
          & > p {
            padding: 0;
            width: 45%;
            color: ${C.white};
            text-align: left;
            font-size: ${C.fSSmallTable};
            line-height: ${C.lHMediumLaptop};
          }
        }
      }
    }
  }
`;

export const Section6 = styled.div`
  ${sectionMargin};
  h2 + p {
    display: none;
  }
  .list-wrap {
    width: 100%;
    ul {
      width: 100%;
      padding-left: 7%;
      list-style-type: none;
      li {
        margin: 15px 0;
        font-family: RobotoRegular;
        font-size: ${C.fSBigPhone};
        line-height: ${C.lHMPhone};
        text-align: left;
        color: ${C.blackL};
        position: relative;
        &:hover,
        &:active {
          color: ${C.pink};
          font-weight: bold;
          &::after {
            position: absolute;
            content: '';
            top: 3px;
            left: -20px;
            border-radius: 50%;
            border: 1px solid ${C.pink};
            width: 10px;
            height: 10px;
            display: flex;
            align-items: center;
            background-color: ${C.pink};
            justify-content: center;
          }
        }
      }
    }
  }
  .lifeStyle-img {
    width: 100%;
    height: 50vh;
    margin: 10px 0;
    min-height: 250px;
    background: url(${Lf1}) no-repeat center;
    background-size: cover;
    & div {
      display: none;
    }
  }
  ${mediaStyleS6};

`;

const mediaStyleS7 = css`
  @media (min-width: ${C.phone}) {
    h2 {
      text-align: left;
      margin-bottom: 2rem;
    }
    .contact-wrap {
      display: flex;
      margin-bottom: 70px;
      justify-content: space-between;
      width: 100%;
      flex-direction: row-reverse;
      height: 500px;
      .form-wrap,
      .social-wrap {
        width: 50%;
        margin: 0;
        display: flex;
        padding: 0;
        flex-direction: column;
      }
      .social-wrap {
        .social-image {
          width: 100%;
          height: 90%;
          display: block;
          object-fit: unset;
        }
      }
      .form-wrap {
        padding-left: 50px;
        justify-content: space-between;
        h3 {
          margin: 0;
          text-align: left;
          font-size: ${C.fSLLaptop};
          line-height: ${C.lHBigLaptop};
        }
        form {
          padding: 0;
        }
      }
    }
  }
`;

export const Section7 = styled.div`
  ${sectionMargin};
  ${container}
  padding-bottom: 70px;
  .contact-wrap {
    h3 {
      color: ${C.blackL};
      font-weight: 500;
      line-height: ${C.lHMPhone};
      font-size: ${C.fSSmallTable};
      text-transform: capitalize;
      & > span {
        color: ${C.pink};
      }
    }
    form {
      padding: 0 15px;
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      & .input-wrap {
        margin: 7px 0;
      }
      input, textarea {
        width: 100%;
        padding-left: 10px;
        border-radius: 7px;
      }
      input {
        height: 40px;
      }
      textarea {
        margin-bottom: 15px;
      }
    }
    .social-wrap {
      width: 100%;
      padding: 0 15px;
      margin: 25px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        display: none;
      }
      .social {
        display: flex;
        margin: 15px 0;
        align-items: center;
        .social-box {
          display: flex;
          a {
            margin: 0 10px;
            cursor: pointer;
            &:hover {
              transition: all 0.3s;
              transform: scale(1.01);
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
  ${mediaStyleS7};
`;
