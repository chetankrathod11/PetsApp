import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

const SocialMediaLogin = () => {
  return (
    <View>
      <View style={styles.socialMediaTitleContainer}>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={styles.text}>Or via social media</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.logoContainer}>
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
      <View style={styles.signUpTextContainer}>
        <Text style={{fontFamily: 'BalooChettan2-Regular', color: '#fff'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaLogin;

const styles = StyleSheet.create({
  socialMediaTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('12%'),
    paddingHorizontal: wp('14%'),
  },
  horizontalLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#FAFAFA',
  },
  text: {
    fontSize: wp('4%'),
    // fontWeight: 'bold',
    width: wp('45%'),
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'BalooChettan2-Regular',
  },
  socialImage: {
    width: hp('4%'),
    height: hp('4%'),
  },
  logoContainer: {
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('25%'),
  },
  signUpTextContainer: {
    marginTop: hp('4%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontFamily: 'BalooChettan2-Medium',
    color: '#FDBD60',
    fontWeight: 'bold',
    marginLeft: wp('1%'),
  },
});
