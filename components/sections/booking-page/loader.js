import React from 'react';
import { LoadWrap, LoaderBox, CircleLoaderBox } from './ui';
// ////////////////////////////

export const FormLoader = () => (
  <LoadWrap>
    <LoaderBox>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderBox>
  </LoadWrap>
);

export const CircleLoader = () => (
  <CircleLoaderBox>
    <div></div>
  </CircleLoaderBox>
);
