import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import SignUpForm from './SignUpForm';
import SocialMediaSignup from './SocialMediaSignup';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignUp = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.titleText}>Let's Register.</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <SignUpForm />

        <SocialMediaSignup />
      </View>
    </DismissKeyboard>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: wp('1%'), backgroundColor: '#000000'},
  titleText: {
    fontFamily: 'BalooChettan2-Medium',
    color: '#FDBD60',
    marginTop: hp('2%'),
    fontSize: wp('7%'),
  },
  horizontalLine: {
    width: wp('14%'),
    height: wp('0.25'),
    backgroundColor: '#FDBD60',
    marginTop: wp('2%'),
  },
});
