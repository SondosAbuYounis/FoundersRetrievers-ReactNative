import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BtnStyle} from '../../style/BtnStyle';

interface Props {
  onPressMinus: () => void;
}

export const MinusButton: FC<Props> = ({onPressMinus}) => {
  return (
    <>
      <TouchableOpacity style={BtnStyle.minus} onPress={onPressMinus}>
        <Text style={BtnStyle.text}> - </Text>
      </TouchableOpacity>
    </>
  );
};
