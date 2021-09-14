import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import AppBar from '@components/AppBar';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <AppBar name="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});
export default HomeScreen;
