import React from 'react';
import {GreetingsScreen} from './screens/GreetingsScreen';
import {Container} from './components/Container';
import {NavigationContainer} from '@react-navigation/native';

const BiLingualGreetings = () => {
  return (
    <>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        <Container>
          <GreetingsScreen />
        </Container>
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </>
  );
};

export default BiLingualGreetings;
