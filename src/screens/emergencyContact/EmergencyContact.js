import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EmergencyContact = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/arrow-left-s-line.png')}
              style={styles.backImg}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>EMERGENCY CONTACT</Text>
        </View>
        <Text style={styles.headingText}>Animal Rescue Team</Text>
        <View style={styles.contactContainer}>
          <Image
            source={require('../../assets/images/phone-line.png')}
            style={styles.contactImg}
          />
          <View>
            <Text style={styles.text}>Phone Number</Text>
            <Text style={[styles.text, {fontFamily: 'BalooChettan2-Bold'}]}>
              1251 846874 235
            </Text>
          </View>
        </View>
        <View style={[styles.contactContainer, {marginTop: hp('4%')}]}>
          <Image
            source={require('../../assets/images/message.png')}
            style={styles.contactImg}
          />
          <View>
            <Text style={styles.text}>Email ID</Text>
            <Text style={[styles.text, {fontFamily: 'BalooChettan2-Bold'}]}>
              animalrescue@gmail.com
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.text,
            {
              fontFamily: 'BalooChettan2-Regular',
              marginTop: hp('3%'),
              marginLeft: wp('2%'),
            },
          ]}>
          What is your emergency?
        </Text>
        <TextInput
          placeholder="Lorem ipsum dolor sit amet, conseteture sadipscing elitr, sed diam nonumy eirmod tempor invidunt ?"
          placeholderTextColor="#FFFFFF"
          style={styles.input}
          multiline
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[styles.text, {color: '#000', fontWeight: 'bold'}]}>
            SUBMIT
          </Text>
          <View style={styles.buttonImageContainer}>
            <Image
              source={require('../../assets/images/paw-black-shape.png')}
              style={{
                height: wp('4%'),
                width: wp('4%'),
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EmergencyContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    height: hp('7.5%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  backImg: {
    height: wp('7%'),
    width: wp('7%'),
    marginHorizontal: wp('5%'),
  },
  headerText: {
    color: '#FAFAFA',
    fontFamily: 'BalooChettan2-Bold',
    fontSize: wp('5%'),
    marginLeft: wp('2%'),
  },
  headingText: {
    color: '#FDBD60',
    fontFamily: 'BalooChettan2-Medium',
    fontSize: wp('5%'),
    marginTop: hp('3%'),
    marginLeft: wp('2%'),
  },
  contactContainer: {
    flexDirection: 'row',
    width: wp('94%'),
    height: hp('10%'),
    backgroundColor: '#202020',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  contactImg: {
    width: wp('7.5%'),
    height: wp('6%'),
    marginHorizontal: wp('10%'),
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'BalooChettan2-Medium',
    fontSize: wp('4.5%'),
    margin: wp('0.5%'),
  },
  input: {
    width: wp('94%'),
    height: hp('20%'),
    backgroundColor: '#202020',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('1%'),
    paddingHorizontal: wp('3.8%'),
    paddingVertical: wp('4%'),
    color: '#FFFFFF',
    fontSize: wp('5%'),
    fontFamily: 'BalooChettan2-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FDBD60',
    height: wp('9%'),
    width: wp('33%'),
    borderRadius: 18,
    marginTop: hp('20%'),
    paddingLeft: wp('5%'),
    alignSelf: 'center',
  },
  buttonImageContainer: {
    backgroundColor: '#000',
    borderRadius: 18,
    height: wp('7%'),
    width: wp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: hp('0.8%'),
  },
});
