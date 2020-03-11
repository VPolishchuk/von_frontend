import * as R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { width, color, space, fontWeight, fontFamily, fontSize } from 'styled-system';
// constants
import * as C from '../constants';
// helpers
import * as H from '../helpers';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const InfoWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;
  z-index: 11;
  & .info-icon {
    width: 16px;
    height: 16px;
    min-width: 16px;
    text-align: center;
    border-radius: 50%;
    color: red;
    border: 1px solid lightgray;
    &:hover {
      background-color: red;
      color: black;
    }
  }
  & .info-text {
    display: none;
    width: max-content;
    max-width: 400px;
    padding: 5px;
    margin: 0 5px;
    box-shadow: 0 0 2px 2px gray;
    border-radius: 2px;
    background-color: white;
    font-size: 12px;
    word-break: break-word;
    position: absolute;
    left: 16px;
  }
  & .info-icon:hover + .info-text {
    display: inline-flex;
  }
`;

export const Info = (props) => (
  <InfoWrapper>
    <div className='info-icon'>i</div>
    <div className='info-text'>{props.text}</div>
  </InfoWrapper>
);

export const Error = styled('span')`
  ${space}
  ${fontSize}
  color: red;
  width: max-content;
  top: ${({ errorTop }) => errorTop};
  left: ${({ errorLeft }) => errorLeft};
  z-index: ${({ zIndex }) => R.or(zIndex, 'unset')};
  position: ${({ errorPosition }) => errorPosition};
`;

export const Textarea = styled.textarea`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  cursor: text;
  resize: none;
  outline: none;
  padding: 5px 15px;
  line-height: 14px;
  border-radius: 1px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  height: ${({ height }) => R.or(height, '72px')};
  border: ${({ border }) => R.or(border, '1px solid')};
  background-color: ${({ background }) => R.or(background, 'white')};
  border-color: ${({ borderColor }) => R.or(borderColor, 'lightgray')};
  width: ${({ width }) => (
    H.ifElse(H.isNotNil(width), width, '540px')
  )};
  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
  @media(max-width: ${C.PHONE_UI_BREAKPOINT}px) {
    height: 90px;
    font-size: 12px;
    width: 250px;
  }
`;

export const SelectWrapper = styled.div`
  composes: ${width};
  position: relative;
  &:after {
    width: 6px;
    content: '';
    height: 6px;
    z-index: 10;
    position: absolute;
    border: solid black;
    pointer-events: none;
    border-width: 0px 1px 1px 0;
    transform: rotate(45deg) translate(0, -60%);
    top: ${({ afterTop }) => R.or(afterTop, '18px')};
    right: ${({ afterRight }) => R.or(afterRight, '25px')};
    @media(max-width: ${C.PHONE_UI_BREAKPOINT}px) {
      top: 9px;
    }
  }
`;

export const Option = styled.option``;

export const renderOptions = (options) => {
  if (R.isNil(options)) return;
  if (R.not(Array.isArray(options))) {
    const defaultOptions = [<Option key={1} value='' />];
    R.forEachObjIndexed((obj) => (
      defaultOptions.push(
        <Option key={obj.id} value={obj.id}>{obj.displayValue}</Option>,
      )
    ), options);
    return defaultOptions;
  }
  return options.map((option, index) => {
    if (R.is(String, option)) {
      return <Option key={index} value={option}>{option}</Option>;
    }
    return (
      <Option
        key={index}
        disabled={option.disabled}
        value={R.or(option.id, option.value)}
      >
        {R.or(option.name, option.label)}
      </Option>
    );
  });
};
