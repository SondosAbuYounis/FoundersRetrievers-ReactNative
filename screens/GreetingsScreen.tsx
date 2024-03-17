import React, {FC} from 'react';
import {View} from 'react-native';
import {Greeting} from '../components/helloWorld/GreetingsText';
import {BackgroundStyle} from '../style/Background';
import {RedBtn} from '../components/buttons/RedBtn';
import {SeconderyTxt} from '../components/helloWorld/SeconderyTxt';

export const GreetingsScreen: FC = () => {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <View style={[BackgroundStyle.center]}>
        <View style={[BackgroundStyle.flexCol]}>
          <Greeting greeting="Goten Morgen" />
          <SeconderyTxt text="Welcome to my first ReactNative App !!" />
          {/* <Greeting greeting="صباح الخير" /> */}
          <RedBtn onPressPlus={() => {}} text="Sign In" />
        </View>
        <SeconderyTxt text="see ya later aligator :')" />

        {/* <View style={[BackgroundStyle.flexRow]}>
          <MinusButton onPressMinus={() => setCount(count - 1)} />
          <Text>{count}</Text>
          <PlusBtn onPressPlus={() => setCount(count + 1)} />
        </View> */}
      </View>
    </>
  );
};
