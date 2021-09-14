import React, {Suspense} from 'react';
import {LogBox} from 'react-native';
import ApplicationNavigator from '@navigation';
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
      <Suspense fallback={<SplashScreen />}>
        <ApplicationNavigator />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
