import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardDetails from './CardDetails';

const AddCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/arrow-left-s-line.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>ADD CARD</Text>
      </View>
      <View style={styles.cardTypeContainer}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/Rectangle8.png')}
            style={{
              height: wp('8%'),
              width: wp('18%'),
              borderRadius: 18,
            }}
          />
          <Text style={styles.debitText}>Debit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: wp('6%')}}>
          <Text style={styles.text}>Credit</Text>
        </TouchableOpacity>
      </View>
      <CardDetails />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.text}>Continue</Text>
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
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    height: hp('8%'),
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
  cardTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDBD60',
    height: wp('9%'),
    width: wp('42%'),
    borderRadius: 18,
    paddingLeft: wp('1%'),
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FDBD60',
    height: wp('9%'),
    width: wp('38%'),
    borderRadius: 18,
    marginTop: hp('40%'),
    paddingLeft: wp('8%'),
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
  debitText: {
    alignSelf: 'center',
    color: '#FDBD60',
    position: 'absolute',
    fontSize: wp('4%'),
    fontFamily: 'BalooChettan2-Bold',
  },
  text: {
    color: '#000000',
    fontSize: hp('2%'),
    fontFamily: 'BalooChettan2-Bold',
  },
});
