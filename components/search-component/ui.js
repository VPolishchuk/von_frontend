import styled, { css } from 'styled-components';
import * as C from '../../ui/constant';
// //////////////////////////////////////////////

const mediaMinWidthStyles = css`
  @media (min-width: ${C.phone}) {
    & {
      padding: 10px;
      flex-direction: row;
      & > button {
        margin: 0 4px;
      }
      & > .input-wrap {
        width: calc(100%/3);
        & input {
          color: ${C.blackL};
          font-family: Roboto;
          line-height: ${C.lHMTable};
          font-size: ${C.fSMediumTable};
        }
        &.select {
          border-bottom: 0;
          border-right: 1px solid #E8E8E8;
        }
        &.date {
          & label > span {
            margin: 0 7px;
            width: 25px;
            height: 25px;
            display: block;
          }
          & > .date-picker-wrap {
            display: flex;
            align-items: center;  
            flex-direction: row;
            justify-content: space-between;
            & > span {
              display: none;
            }
          }
        }
      }
    }
  }
`;

export const SearchFormWrap = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px 10px;
  border-radius: 10px;
  background: ${C.white};
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(30, 27, 28, 0.14);
  & > .input-wrap {
    width: 100%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    label {
      width: 100%;
      color: ${C.dgrey};
      display: flex;
      align-items: left;
      line-height: ${C.lHPhone};
      font-size: ${C.fSBigPhone};
      text-transform: capitalize;
    }
    &.select {
      height: max-content;
      border-bottom: 1px solid #E8E8E8;
    }
    &.select,
    &.date {
      width: 100%;
      label {
        position: unset;
      }
    }
    &.date {
      margin: 5px 0;
      display: flex;
      height: max-content;
      flex-direction: column;
      padding: 0 5px;
      & label > span {
        display: none;
      }
      & > .date-picker-wrap {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & > span {
          display: block;
          width: 25px;
          height: 25px;
          margin-right: 7px;
        }
        & .react-datepicker-wrapper {
          width: 49%;
          & .react-datepicker__input-container > input {
            border: 0;
          }
        }
      }
    }
  }
  ${mediaMinWidthStyles}
`;
