import styled from 'styled-components';
import * as C from '../../ui/constant';
// ///////////////////////////////////////////

export const SearchWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  position: relative;
  & > label {
    position: absolute;
    top: 0;
    left: 15px;
    width: 25px;
    height: 100%;
    z-index: 10;
    display: flex;
    cursor: pointer;
    align-items: center;
  }
  & > input {
    border: 0;
    width: 25px;
    height: 30px;
    opacity: 0;
    margin: 0;
    color: ${C.llGrey};
    padding-left: 40px;
    transition: all 0.4s;
    &.mob-search,
    &:focus {
      opacity: 1;
      width: 100%;
      transition: all 0.4s;
      border-radius: 0;
      // height: 50px;
      border-bottom: 1px solid ${C.llGrey};
    }
  }
`;

export const CustomFileWrap = styled.div`
  width: 150px;
  height: 50px;
  position: relative;
  input[type='file'] {
    opacity: 0;
    margin: 0;
  }
  & > div {
    position: absolute;
    z-index: -1;
    padding: 10px 15px; 
    width: max-content;
    height: 50px;
    min-width: 150px;
    justify-content: center;
    color: ${C.pink};
    font-weight: bold;
    font-size: ${C.fSBigPhone};
    background: ${C.white};
    border: 1px solid ${C.pink};
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    white-space: pre;
    & > span {
      width: 20px;
      height: 20px;
      margin: 0 5px;
    }
  }
  &.bg-pink > div {
    color: ${C.white};
    background-color: ${C.pink};
    & svg {
      fill: ${C.white};
      color: ${C.white};
    }
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 14px 0;
  position: relative;
  align-items: center;
  justify-content: space-between;
  &.textarea {
    height: 215px;
  }
  input,
  textarea {
    width: 100%;
    height: 50px;
    max-width: 450px;
    padding-left: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid ${C.lightGrey};
  }
  textarea {
    padding-top: 10px;
    height: 215px;
    resize: none;
  }
  input.shadow,
  textarea.shadow {
    border: 0;
    margin: 10px 0;
    width: 100%;
    max-width: 100%;
    box-shadow: 0px 2.79914px 27.9914px rgba(30, 27, 28, 0.14);
  }
  & > label {
    position: absolute;
    top: 16px;
    left: 10px;
    font-size: 12px;
    transition: all 0.4s;
    transform: translate(0, 0);
  }

  &.file {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > label {
      position: unset;
      font-size: 14px;
    }
  }
  input:focus,
  textarea:focus {
    box-shadow: 0px 2.79914px 27.9914px rgb(23,133,242, 0.5);

  }
  input:focus + label,
  textarea:focus + label {
    font-size: 10px;
    transform: translate(-10px, -34px);
  }
`;

export const CheckboxWrap = styled.div`
  & > label {
    & span {
      margin: 0 7px;
    }
  }
`;

export const CheckboxContainer = styled.div`
	display: inline-flex;
	input[type='checkbox'] {
		border: 0;
		padding: 0;
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		position: absolute;
		white-space: nowrap;
	}
	.styled-container {
		width: 16px;
		height: 16px;
		background: salmon;
		border-radius: 3px;
		display: inline-block;
		transition: all 150ms;
		&.checked {
			background: papayawhip;
		}
		&:focus + & {
			box-shadow: 0 0 0 3px pink;
		}
		svg {
			visibility: hidden;
			&.checked {
				visibility: visible;
			}
		}
	}
`;

export const SelectWrap = styled(InputWrap)`
  z-index: ${({zIndex}) => zIndex};
`;

export const DatePickerWrap = styled.div`
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
      width: 100%;
      height: 40px;
      border: 0;
    }
  }
`;
