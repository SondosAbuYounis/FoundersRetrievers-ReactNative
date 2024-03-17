import {StyleSheet} from 'react-native';

export const BtnStyle = StyleSheet.create({
  minus: {
    backgroundColor: '#E83434',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  plus: {
    backgroundColor: '#18E074',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  lightRedBtn: {
    marginTop: 20,
    margin: 'auto',
    padding: 'auto',
    borderWidth: 2,
    borderColor: '#E83434',
    borderBlockColor: '#E83434',
    width: 'auto',
    height: 35,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightRedBtnPressed: {
    backgroundColor: '#E83434',
    marginTop: 20,
    padding: 'auto',
    height: 35,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightRedBtnTxt: {
    color: '#E83434',
    textAlign: 'center',
  },
  lightRedBtnTxtPressed: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
