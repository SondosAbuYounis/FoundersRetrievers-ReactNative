import React, {FC, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BtnStyle} from '../../style/BtnStyle';

interface Props {
  onPressPlus: () => void;
  text: string;
}

export const RedBtn: FC<Props> = ({onPressPlus, text}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <>
      <TouchableOpacity
        style={isPressed ? BtnStyle.lightRedBtnPressed : BtnStyle.lightRedBtn}
        onPress={onPressPlus}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}>
        <Text
          style={
            isPressed ? BtnStyle.lightRedBtnTxtPressed : BtnStyle.lightRedBtnTxt
          }>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};
