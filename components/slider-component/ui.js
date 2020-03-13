import styled from 'styled-components';
import * as R from 'ramda';
// import * as C from '../../ui/constant';
// import {downArrow} from '../../ui/common';
// ////////////////////////////////////////////

export const SliderWrap = styled.div`
  height: ${({height}) => R.or(height, '100vh')};
  width: ${({width}) => R.or(width, '100vw')};
  position: relative;
  overflow: hidden;
  border: 1px solid red;
`;

export const SliderRow = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  transition: transform 0.5s linear;
  transform: ${({transform}) => transform};

`;

export const ActiveView = styled.div`
  height: ${({height}) => R.or(height, '100vh')};
  width: ${({width}) => R.or(width, '100vw')};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const ImageBox = styled.img`
  height: ${({height}) => R.or(height, '100vh')};
  width: ${({width}) => R.or(width, '100vw')};
  object-fit: unset;

`;

export const NavBox = styled.div`
  position: absolute;
  bottom: 4%;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s linear;
`;

export const BulletComponent = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 10px 2px;
  border-radius: 50%;
  border: 1px solid #F9F9F9;
  background-color: ${({backgroundColor}) => R.or(backgroundColor, 'transparent')};
`;
