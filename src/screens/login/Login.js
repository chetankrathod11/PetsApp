import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginForm from './LoginForm';
import SocialMediaLogin from './SocialMediaLogin';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Login = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/pet.png')}
            style={styles.logo}
          />
          <Text style={styles.titleText}>PAWSIBILITIES</Text>
        </View>
        <Text style={styles.loginText}>Let's Log In.</Text>
        <View style={styles.horizontalLine} />
        <LoginForm />
        <SocialMediaLogin />
      </View>
    </DismissKeyboard>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000'},
  titleText: {
    color: '#FAFAFA',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    fontFamily: 'BalooChettan2-Bold',
  },
  logoContainer: {
    height: hp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: hp('15%'),
    width: wp('30%'),
  },
  loginText: {
    fontFamily: 'BalooChettan2-Medium',
    color: '#FDBD60',
    margin: hp('1%'),
    fontSize: wp('7%'),
  },
  horizontalLine: {
    width: wp('20%'),
    height: wp('0.25%'),
    backgroundColor: '#FDBD60',
  },
});
