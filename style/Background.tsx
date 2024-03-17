import React from 'react';
import {StyleSheet} from 'react-native';
export const BackgroundStyle = StyleSheet.create({
  container: {
    flex: 1,
    objectFit: 'cover',
  },
  bgImage: {
    flex: 1,
    objectFit: 'cover',
    // justifyContent: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    aspectRatio: 5,
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
  },
  flexCol: {
    flexDirection: 'column',
  },
});
