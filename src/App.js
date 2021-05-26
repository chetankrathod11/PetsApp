import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  StatusBar,
  SafeAreaView,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Login from './screens/login/Login';
import SignUp from './screens/signup/SignUp';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{height: hp('105%'), width: wp('100%')}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Login />
      {/* <SignUp /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
