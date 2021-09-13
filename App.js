import React, {Suspense} from 'react';
import {LogBox} from 'react-native';
import ApplicationNavigator from '@navigation';
import SplashScreen from '@screens/SplashScreen';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on',
]);

const App = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <ApplicationNavigator />
    </Suspense>
  );
};

export default App;
