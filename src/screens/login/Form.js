import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Form = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp('2%')}}>
        <Text style={styles.text}>Phone number / Email ID</Text>
        <TextInput
          placeholder="Enter your phone number / Email ID"
          placeholderTextColor="#FAFAFA"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <View style={{marginTop: hp('2%')}}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Enter your password here"
          placeholderTextColor="#FAFAFA"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={{
          width: wp('35%'),
          marginLeft: wp('66%'),
        }}>
        <Text
          style={{
            color: '#FAFAFA',
            fontSize: wp('3%'),
            fontWeight: 'bold',
            margin: wp('1%'),
            textAlign: 'right',
            marginRight: wp('5%'),
            fontFamily: 'BalooChettan2-Regular',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={[styles.text, {color: '#000', fontWeight: 'bold'}]}>
          LOG IN
        </Text>
        <View
          style={{
            borderWidth: 3,
            borderColor: '#000',
            borderRadius: 18,
            height: wp('7%'),
            width: wp('7%'),
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: hp('1%'),
          }}>
          <Image
            source={require('../../assets/images/dogpow.png')}
            style={{
              height: wp('5%'),
              width: wp('5%'),
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    height: hp('25%'),
    marginTop: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: hp('5%'),
    width: wp('95%'),
    backgroundColor: '#202020',
    borderRadius: 10,
    margin: wp('2%'),
    paddingLeft: wp('5%'),
    fontFamily: 'BalooChettan2-Regular',
  },
  button: {
    height: hp('6%'),
    width: wp('25%'),
  },
  text: {
    color: '#FAFAFA',
    fontSize: hp('2%'),
    marginLeft: wp('3%'),
    fontFamily: 'BalooChettan2-Medium',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FDBD60',
    height: wp('9%'),
    width: wp('35%'),
    borderRadius: 18,
    marginTop: hp('3%'),
    paddingLeft: wp('5%'),
  },
});
