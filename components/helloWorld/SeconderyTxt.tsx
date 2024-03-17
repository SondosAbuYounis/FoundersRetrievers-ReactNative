import React from 'react';
import {Text} from 'react-native';
import {TxtStyle} from '../../style/Text';

export interface SeconderyTxt {
  text: string;
}

export const SeconderyTxt = (props: SeconderyTxt) => {
  return <Text style={TxtStyle.seconderyTxt}>{props.text}</Text>;
};
