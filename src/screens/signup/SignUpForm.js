import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const SignUpForm = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          placeholder="Enter your Full Name"
          placeholderTextColor="#FAFAFA"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Phone number / Email ID</Text>
        <TextInput
          placeholder="Enter your phone number / Email ID"
          placeholderTextColor="#FAFAFA"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Enter your password here"
          placeholderTextColor="#FAFAFA"
          secureTextEntry={true}
          style={[styles.input, {fontSize: wp('3.8%')}]}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Re enter Password</Text>
        <TextInput
          placeholder="Enter your password here"
          placeholderTextColor="#FAFAFA"
          secureTextEntry={true}
          style={[styles.input, {fontSize: wp('3.8%')}]}
        />
      </View>
      <View style={styles.termsConditionsContainer}>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
        <View style={{flexDirection: 'row', padding: wp('1%')}}>
          <View>
            <Text style={styles.tcText}>I have read and agree to the</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.tcText, {color: '#FDBD60'}]}>
              {' '}
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp('-2%'),
          }}>
          <Text style={[styles.tcText, {marginLeft: wp('9%')}]}>{''}and</Text>
          <TouchableOpacity>
            <Text style={[styles.tcText, {color: '#FDBD60'}]}>
              {' '}
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[styles.text, {color: '#000'}]}>SIGN UP</Text>
          <View style={styles.buttonImageContainer}>
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
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: wp('5.5%'),
  },
  input: {
    height: hp('5%'),
    width: wp('93%'),
    backgroundColor: '#202020',
    borderRadius: 10,
    margin: wp('1%'),
    paddingLeft: wp('5%'),
    fontFamily: 'BalooChettan2-Regular',
    fontSize: wp('4%'),
  },
  text: {
    color: '#FAFAFA',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
    fontFamily: 'BalooChettan2-Medium',
  },
  termsConditionsContainer: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tcText: {
    fontFamily: 'BalooChettan2-Regular',
    color: '#fff',
    fontSize: wp('4%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FDBD60',
    height: wp('9%'),
    width: wp('38%'),
    borderRadius: 18,
    marginTop: hp('3%'),
    paddingLeft: wp('5%'),
  },
  buttonImageContainer: {
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 18,
    height: wp('7%'),
    width: wp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: hp('1%'),
  },
  checkBox: {
    width: wp('4%'),
    height: wp('4%'),
    backgroundColor: '#fff',
    margin: hp('1%'),
    borderRadius: 4,
  },
});
