import React from 'react';
import {Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'Poppins-Regular'}}>Loading</Text>
    </View>
  );
};

export default SplashScreen;
