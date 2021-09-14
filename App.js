import React, {Suspense} from 'react';
import {LogBox} from 'react-native';
import ApplicationNavigator from '@navigation';
import {NativeBaseProvider} from 'native-base';
import {theme} from '@/theme';
import SplashScreen from '@screens/SplashScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on',
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Suspense fallback={<SplashScreen />}>
          <ApplicationNavigator />
        </Suspense>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
