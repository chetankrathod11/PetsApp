import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Sebin Francis"
          placeholderTextColor="#fff"
        />
      </View>
      <View>
        <Text style={styles.text}>Card Number</Text>
        <TextInput
          style={[styles.input, {borderBottomColor: '#1FCD6C'}]}
          placeholder="1234 5678 9081 5385"
          placeholderTextColor="#fff"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.text}>Expiry Date</Text>
          <TextInput
            placeholder="12 / 22"
            placeholderTextColor="#fff"
            style={[styles.input, {width: wp('45%')}]}
          />
        </View>
        <View style={{marginLeft: wp('6%')}}>
          <Text style={styles.text}>CVV</Text>
          <TextInput
            placeholder="010"
            placeholderTextColor="#fff"
            style={[styles.input, {width: wp('25%')}]}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: hp('2%'),
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Image
            style={styles.tickImage}
            source={require('../../assets/images/tick_circle.png')}
          />
        </TouchableOpacity>
        <Text style={styles.saveCardText}>Save the card details</Text>
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    height: hp('30p'),
    alignSelf: 'center',
    // marginTop: hp('2%'),
    padding: wp('3%'),
  },
  text: {
    color: '#FAFAFA',
    fontSize: hp('2%'),
    fontFamily: 'BalooChettan2-Regular',
    marginTop: hp('2%'),
  },
  input: {
    height: hp('5.8%'),
    // backgroundColor: '#CFD1D3',
    borderBottomWidth: hp('.1%'),
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CFD1D3',
    fontFamily: 'BalooChettan2-Regular',
    color: '#FAFAFA',
    fontSize: wp('5.5%'),
  },
  tickImage: {
    width: wp('5%'),
    height: wp('5%'),
  },
  saveCardText: {
    color: '#FAFAFA',
    fontSize: wp('4%'),
    fontFamily: 'BalooChettan2-Regular',
    marginLeft: wp('3%'),
  },
});
