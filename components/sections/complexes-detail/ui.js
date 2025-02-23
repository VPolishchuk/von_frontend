import styled, { css } from 'styled-components';
// ui
import * as C from '../../../ui/constant';
import {
  fontTemplate,
  commonPadding
} from '../../../ui/common';
// ///////////////////////////////////////////////////////

const mediaLoc = css`
  @media (min-width: ${C.phone}) {
    & > h5 {
      display: none;
    }
    .location-map {
      margin-top: 0;
    }
  }
`;

const mediaServicesWrap = css`
  @media (min-width: ${C.phone}) {
    .services-wrap {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
    }
  }
`;

const mediaMain = css`
  @media (min-width: ${C.phone}) {
    & > div {
      height: 60vh;
    }

    & + .container {
      display: flex;
      padding-top: 0;
      flex-direction: row;
      padding-bottom: 70px;
      justify-content: space-between;
      .left-box,
      .right-box {
        border-radius: 5px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.11);
      }
      & > .left-box {
        width: 70%;
        padding: 30px 15px;
        & .loc-pos-wrap {
          display: none;
        }
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
        padding: 0 0 30px;
        flex-direction: column;
      }
    }
  }
`;

const mediaBottom = css`
  @media (min-width: ${C.phone}) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .loc-card-wrap {
      width: 100%;
      margin: 15px 0;
      height: 300px;
      max-height: max-content;
      display: flex;
      justify-content: space-between;
      img, div {
        width: 48%;
      }
      img + div {
        display: block;
        h5 {
          font-weight: 500;
          text-align: left;
          ${fontTemplate};
        }
      }
      button {
        margin: 30px 0;
      }
    }
  }
`;

export const MainSectionBlock = styled.div`
  width: 100%;
  height: 70vh;
  & + .container {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20%;
    flex-direction: column;

    .loc-pos-wrap {
      & h5 {
        color: ${C.pink};
        text-align: left;
        text-transform: uppercase;
      }
      & > button {
          height: 50px;
          min-width: 150px;
          width: max-content;
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
            height: 20px;
            width: 20px;
            margin: 0 5px;
          }
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
      h5 + p {
        color: ${C.black};
        padding: 0 1rem;
      }
      ${mediaLoc}
    }

    .left-box {
      h3 {
        color: ${C.blackL};
        text-align: left;
        font-weight: bold;
      }
      h3 + p {
        color: ${C.black};
        padding-bottom: 20px;
        font-size: ${C.fSSmallerTable};
      }
      .ap-info-wrap {
        width: 100%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        & h5 {
          width: 100%;
          color: ${C.pink};
          text-align: left;
          text-transform: uppercase;
        }
        & > p {
          color: ${C.blackL};
          text-align: left;
          font-weight: 300;
        }
        & > span {
          font-weight: 500;
          line-height: ${C.lHMPhone};
          ${commonPadding};
        }
        .nearby-box {
          width: 100%;
          display: flex;
          overflow: hidden;
          height: max-content;
          min-width: ${C.minWidth};
          & > div {
            display: flex;
            overflow-x: scroll;
            width: max-content;
            height: max-content;
            min-width: ${C.minWidth};
            & > div {
              width: 200px;
              height: 100%;
              margin-right: 15px;
              & img {
                object-fit: none;
                width: 100%;
                height: auto;
              }
              p {
                margin: 10px 0;
                font-size: 14px;
                color: ${C.blackL};
                text-align: center;
              }
            }
          }
        }
        .services-wrap {
          width: 100%;
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(1, 1fr);
          & > div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            ${commonPadding};

            & > img {
              width: 50px;
              height:50px;
              object-fit: contain;
            }
            & > p {
              padding-left: 1em;
              text-align: left;
            }
          }
        }
        ${mediaServicesWrap}
      }
    }
    & p {
      text-align: justify;
      white-space: normal;
      color: ${C.llGrey};
    }
    /* & > button {
      height: 50px;
      min-width: 150px;
      width: max-content;
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
        height: 20px;
        width: 20px;
        margin: 0 5px;
      }
    } */
    .left-box + .right-box {
      display: none;
    }
  }
  ${mediaMain}
`;

export const BottomBoxWrap = styled.div`
  width: 100%;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  & h3 {
    color: ${C.pink};
    text-align: left;
    margin: 20px 0;
    text-transform: uppercase;
  }
  & h5 {
    color: ${C.blackL};
    margin: 15px 0;
    font-weight: 500;
    text-transform: capitalize;
  }
  & .loc-card-wrap {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      -o-object-fit: cover;
      
    }
    img + div {
      display: none;
    }
  }
  ${mediaBottom}
`;

export const DateFormFilter = styled.form`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const NearbyBoxWrap = styled.div`
  width: 100%;
  max-width: 800px;
  /* min-width: 320px; */
  overflow: scroll;
  & > div {
    width: max-content;
    display: flex;
    flex-direction: row;
    height: 100%;
    & > div {
      width: 200px;
      height: 200px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 85%;
        object-fit: unset;
      }
      p {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
