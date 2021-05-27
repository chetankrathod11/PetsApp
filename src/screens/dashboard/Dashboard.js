import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardsList from './CardsList';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/menu-4-fill.png')}
            style={styles.menuImg}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>PAWSIBILITIES</Text>
      </View>

      <View style={styles.welcomeUser}>
        <View>
          <Text style={styles.userText}>Welcome</Text>
          <Text style={[styles.userText, {fontSize: wp('8.5%')}]}>
            Sebin Francis,
          </Text>
        </View>
        <Image
          source={require('../../assets/images/Ellipse36.png')}
          style={styles.userImage}
        />
      </View>

      <CardsList />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>EMERGENCY CONTACT</Text>
        <View style={styles.buttonImageContainer}>
          <Image
            source={require('../../assets/images/paw-black-shape1.png')}
            style={{
              height: wp('4%'),
              width: wp('4%'),
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#000000',
  },
  headerContainer: {
    height: hp('7.5%'),
    backgroundColor: '#202020',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuImg: {
    height: wp('7%'),
    width: wp('7%'),
    marginHorizontal: wp('5%'),
  },
  headerText: {
    color: '#FAFAFA',
    fontFamily: 'BalooChettan2-Bold',
    fontSize: wp('4.5%'),
    marginLeft: wp('1%'),
  },
  buttonContainer: {
    marginTop: hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FD6060',
    height: wp('9%'),
    width: wp('62%'),
    borderRadius: 18,
    alignSelf: 'center',
    paddingLeft: wp('5%'),
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
  buttonText: {
    fontSize: wp('4.5%'),
    fontFamily: 'BalooChettan2-Bold',
    color: '#000',
  },
  welcomeUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp('8%'),
    paddingHorizontal: wp('3%'),
  },
  userText: {
    fontSize: wp('6%'),
    fontFamily: 'BalooChettan2-Medium',
    color: '#FDBD60',
  },
  userImage: {
    marginTop: hp('2%'),
    height: wp('12%'),
    width: wp('12%'),
  },
});
