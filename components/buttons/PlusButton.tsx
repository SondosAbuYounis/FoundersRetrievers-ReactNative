import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BtnStyle} from '../../style/BtnStyle';

interface Props {
  onPressPlus: () => void;
}

export const PlusBtn: FC<Props> = ({onPressPlus}) => {
  return (
    <TouchableOpacity style={BtnStyle.plus} onPress={onPressPlus}>
      <Text style={BtnStyle.text}> + </Text>
    </TouchableOpacity>
  );
};
