import styled from 'styled-components';
import * as C from '../../ui/constant';
// /////////////////////////////////////////////////////////////

export const ModalBg = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  position: relative;
  background: ${C.white};
  padding: 30px;
  min-width: 320px;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
