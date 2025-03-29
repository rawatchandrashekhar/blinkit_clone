import 'react-native-gesture-handler';
import React from 'react';
import Navigation from '@navigation/Navigation';
import {SafeAreaView} from 'react-native';
import OTPComponent from '@components/global/OTPComponent';
import LazyLoading from 'testing/LazyLoading.tsx';

const App = () => {
  return (
    // <Navigation />
    <SafeAreaView>
      <LazyLoading />
    </SafeAreaView>
  );
};

export default App;
