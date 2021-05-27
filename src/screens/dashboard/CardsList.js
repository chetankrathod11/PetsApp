import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

export default class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          cardName: 'Notice Board',
          cardImg: require('../../assets/images/Mask-Group-23.png'),
        },
        {
          cardName: 'Pets Profile',
          cardImg: require('../../assets/images/Mask-Group-26.png'),
        },
        {
          cardName: 'Forums',
          cardImg: require('../../assets/images/Mask-Group-24.png'),
        },
        {
          cardName: 'Pet Picture',
          cardImg: require('../../assets/images/Mask-Group-25.png'),
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.cardContainer}>
        <View
          style={{
            paddingTop: wp('4%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={item.cardImg} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.cardName}</Text>
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Image
            source={require('../../assets/images/arrow-right-s-line.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={320}
            itemWidth={260}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: hp('62%')},
  cardContainer: {
    width: wp('60%'),
    height: wp('85%'),
    borderRadius: 15,
    backgroundColor: '#FDBD60',
    marginTop: hp('8%'),
  },
  cardImage: {
    width: wp('44%'),
    height: wp('44%'),
  },
  cardText: {
    marginTop: wp('2%'),
    fontSize: wp('7.5%'),
    fontFamily: 'BalooChettan2-Medium',
  },
  nextButton: {
    marginTop: wp('6.5%'),
    width: wp('18%'),
    height: wp('18%'),
    backgroundColor: '#CE9035',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  arrowIcon: {
    width: wp('7%'),
    height: wp('7%'),
  },
});
