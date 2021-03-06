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
import PhoneNumber from './screens/phoneInput/PhoneInput';
import Dashboard from './screens/dashboard/Dashboard';
import EmergencyContact from './screens/emergencyContact/EmergencyContact';
import PaymentHistory from './screens/paymentHistory/PaymentHistory';
import AddCard from './screens/addCard/AddCard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{height: hp('105%'), width: wp('100%')}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PhoneNumber /> */}
      {/* <Dashboard /> */}
      {/* <EmergencyContact /> */}
      {/* <PaymentHistory /> */}
      <AddCard />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
