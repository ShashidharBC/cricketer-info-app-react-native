import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {PLATFORM_LOGO, PLAYER_01, PLAYER_02} from '../../assests/images';
import {PlayerTemplate} from '../PlayerTemplate';
import {FloatingActionComp} from '../FloatingActionComp';

interface WelcomeScreenProps {
  navigation?: any;
}
const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const _renderPlatformInfo = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 6}}>
        <View>
          <Image
            source={PLATFORM_LOGO}
            resizeMode={'contain'}
            style={{height: 150, width: 150, borderRadius: 10, margin: 10}}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'center',
              margin: 10,
            }}>
            ಸ್ನೇಹ ಜೀವಿ ಪ್ರೀಮಿಯರ್ ಲೀಗ್, ಸೀಸನ್ - 09
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'center',
            }}>
            Sneha Jeevi Premier League, Season - 09
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'green',
              margin: 10,
            }}>
            Player Auction Presented by Sneha Jeevi Cricket Club
          </Text>
        </View>
      </View>
    );
  };
  const playerInfo = [
    {
      player_no: 1,
      name: 'Shashidhara Challamarada',
      role: 'All Rounder',
      bt_style: 'Right Hand Bat',
      bl_style: 'Right Arm medium Fast',
      pl_img: PLAYER_02,
      pl_price: 20000,
    },
    {
      player_no: 2,
      name: 'Ganesh Benny',
      role: 'All Rounder',
      bt_style: 'Right Hand Bat',
      bl_style: 'Right Arm Fast',
      pl_img: PLAYER_01,
      pl_price: 2000,
    },
  ];
  const actions = [
    {
      text: 'Sold Players',
      name: 'pl_sold',
      position: 2,
      color: '#14226b',
      textBackground: '#14226b',
      textColor: '#fff',
    },
    {
      text: 'All Teams',
      name: 'pl_teams',
      position: 1,
      color: '#14226b',
      textBackground: '#14226b',
      textColor: '#fff',
    },
    {
      text: 'Unsold Players',
      name: 'pl_unsold',
      position: 3,
      color: '#14226b',
      textBackground: '#14226b',
      textColor: '#fff',
    },
  ];
  const onPressFloatItem = (name: any) => {
    if (name === 'pl_teams') {
      navigation.navigate('All Teams');
    }
    if (name === 'pl_sold') {
      navigation.navigate('Sold Players');
    }
    if (name === 'pl_unsold') {
      navigation.navigate('Unsold Players');
    }
  };
  return (
    <View style={{backgroundColor: '#ECF8F9', height: '100%'}}>
      {_renderPlatformInfo()}
      <ScrollView>
        <PlayerTemplate playerInfo={playerInfo} />
      </ScrollView>
      <FloatingActionComp actions={actions} onPressItem={onPressFloatItem} />
    </View>
  );
};

export default WelcomeScreen;
