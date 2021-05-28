import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {id: 1, image: require('../../assets/images/Rectangle6.png')},
  {id: 2, image: require('../../assets/images/Rectangle5.png')},
  {id: 3, image: require('../../assets/images/Rectangle4.png')},
  {id: 4, image: require('../../assets/images/Rectangle2.png')},
  {id: 5, image: require('../../assets/images/Rectangle3.png')},
];

const Item = ({image}) => (
  <View>
    <View style={styles.payListContainer}>
      <Image source={image} style={styles.contactImg} />
      <View style={{marginHorizontal: wp('5%')}}>
        <Text style={styles.text}>Shopping Product Name</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, conseteture.
        </Text>
      </View>
      <View>
        <Text style={styles.text}>10$</Text>
      </View>
    </View>
    <View style={styles.horizontalLine} />
  </View>
);

const PaymentHistory = () => {
  const renderItem = ({item}) => <Item image={item.image} />;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/arrow-left-s-line.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>PAYMENT HISTORY</Text>
      </View>
      <View style={styles.horizontalLine} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PaymentHistory;

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
  horizontalLine: {
    width: wp('90%'),
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EEEEEE',
    marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),
  },
  payListContainer: {
    flexDirection: 'row',
    width: wp('94%'),
    height: hp('8%'),
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  contactImg: {
    width: wp('10%'),
    height: wp('10%'),
    marginHorizontal: wp('3%'),
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'BalooChettan2-Regular',
    fontSize: wp('5%'),
    margin: wp('0.5%'),
  },
  subText: {
    color: '#6C6C6C',
    fontFamily: 'BalooChettan2-Regular',
    fontSize: wp('3.3%'),
    // margin: wp('0.5%'),
  },
});
