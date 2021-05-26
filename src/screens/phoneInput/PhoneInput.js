import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IntlPhoneInput from 'react-native-intl-phone-input';

onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
  console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
};

const PhoneInput = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Enter Phone Number</Text>
        </View>
        <View style={{padding: wp('5%')}}>
          <Text style={styles.commonText}>Fill the form to verify your</Text>
          <Text style={styles.commonText}>phone number</Text>
        </View>

        <View style={styles.containerInput}>
          <TouchableOpacity style={styles.openDialogueView}>
            {/* <Text style={styles.commonText}>{'+91'}</Text> */}
            <IntlPhoneInput
              onChangeText={this.onChangeText}
              defaultCountry="IN"
              lang="EN"
            />
            {/* <Image
              source={require('../../assets/images/Polygon 2.png')}
              style={{height: 15, width: 15}}
            /> */}
          </TouchableOpacity>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#AEAEAE"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View
          style={{
            marginTop: hp('20%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={[styles.text, {color: '#000'}]}>COUNTINUE</Text>
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
      </KeyboardAvoidingView>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: wp('8%'),
  },
  titleText: {
    color: '#FDBD60',
    fontSize: wp('6%'),
    fontFamily: 'BalooChettan2-Regular',
  },
  containerAvoidingView: {
    flex: 1,
    paddingTop: 10,
  },
  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1.5,
  },
  text: {
    color: '#FAFAFA',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
    fontFamily: 'BalooChettan2-Bold',
  },
  commonText: {
    color: '#AEAEAE',
    fontSize: wp('4.5%'),
  },
  input: {
    height: hp('6.5%'),
    width: wp('63%'),
    backgroundColor: '#202020',
    borderRadius: 10,
    margin: wp('1%'),
    paddingLeft: wp('5%'),
    fontFamily: 'BalooChettan2-Regular',
    fontSize: wp('4.5%'),
    color: '#AEAEAE',
  },
  openDialogueView: {
    height: hp('6.5%'),
    width: wp('23%'),
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FDBD60',
    height: wp('10%'),
    width: wp('38%'),
    borderRadius: 18,
    marginTop: hp('3%'),
    paddingLeft: wp('2%'),
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
});
