import styled, { keyframes } from 'styled-components';
import * as C from '../../ui/constant';
import * as R from 'ramda';
// /////////////////////////////////////////////////////////////

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  position: relative;
  height: max-content;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
`;

export const ldsHourglass = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const LoaderBlock = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    margin: 8px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 32px solid ${C.white};
    animation: ${ldsHourglass} 1.2s infinite;
    border-color: ${C.white} transparent ${C.white} transparent;
  }
`;
