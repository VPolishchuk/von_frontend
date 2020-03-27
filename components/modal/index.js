import React from 'react';
import * as R from 'ramda';
// icon
import * as I from '../../icon/index';
import { Portal } from '../../hook/useModal';
import {
  ModalBg,
  ModalBox,
  CloseButton } from './ui';
/// //////////////////////////////////////////

const ModalComponent = ({ children, close, render }) => {
  return (
    <Portal>
      <div>
        <ModalBg>
          <ModalBox>
            {render(children) || children}
            <hr />
            <CloseButton onClick={close}>
              {I.closeIcon()}
            </CloseButton>
          </ModalBox>
        </ModalBg>
      </div>
    </Portal>
  );
};

export default ModalComponent;
