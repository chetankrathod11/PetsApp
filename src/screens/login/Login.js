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
  TouchableOpacity,
} from 'react-native';
import Form from './Form';

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
            style={{height: hp('15%'), width: wp('30%')}}
          />
          <Text style={styles.titleText}>PAWSIBILITIES</Text>
        </View>
        <Text
          style={{
            fontFamily: 'BalooChettan2-Medium',
            color: '#FDBD60',
            margin: hp('1%'),
            fontSize: wp('7%'),
          }}>
          Let's Log In.
        </Text>
        <View
          style={{
            width: wp('20%'),
            height: StyleSheet.hairlineWidth,
            backgroundColor: '#FDBD60',
          }}
        />
        <Form />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp('12%'),
            paddingHorizontal: wp('14%'),
          }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: '#FAFAFA',
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                width: wp('45%'),
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'BalooChettan2-Medium',
              }}>
              Or via social media
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View
          style={{
            marginTop: hp('3%'),
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: wp('25%'),
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/facebook.png')}
              style={styles.socialImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/google.png')}
              style={styles.socialImage}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: hp('4%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'BalooChettan2-Regular', color: '#fff'}}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'BalooChettan2-Medium',
                color: '#FDBD60',
                fontWeight: 'bold',
                marginLeft: wp('1%'),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
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
  socialImage: {
    width: hp('5%'),
    height: hp('5%'),
  },
});
