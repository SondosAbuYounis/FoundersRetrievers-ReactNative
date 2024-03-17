import React from 'react';
import {Text} from 'react-native';
import {TxtStyle} from '../../style/Text';

export interface Greetings {
  greeting: string;
}

export const Greeting = (props: Greetings) => {
  return <Text style={TxtStyle.mainTxt}>{props.greeting}!</Text>;
};
