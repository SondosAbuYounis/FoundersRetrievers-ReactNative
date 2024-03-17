import React, {FC, PropsWithChildren} from 'react';
import {BackgroundStyle} from '../style/Background';
import {ImageBackground} from 'react-native';
import {Paper} from '../assets/clips/Clips';

export const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <ImageBackground source={Paper} style={BackgroundStyle.bgImage}>
        {children}
      </ImageBackground>
    </>
  );
};
