import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Login from './screens/login/Login';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{height: hp('110%')}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Login />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
