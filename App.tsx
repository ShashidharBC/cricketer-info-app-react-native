/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {PLATFORM_LOGO, PLAYER_01, PLAYER_02} from './src/assests/images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PlayerTemplate} from './src/screens/PlayerTemplate';
import {WelcomeButtons} from './src/screens/WelcomeButtons';
import PlayerList from './src/screens/PlayerList';
import {FloatingActionComp} from './src/screens/FloatingActionComp';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    },
    {
      text: 'All Teams',
      name: 'pl_teams',
      position: 1,
      color: '#14226b',
    },
    {
      text: 'Unsold Players',
      name: 'pl_unsold',
      position: 3,
      color: '#14226b',
    },
  ];

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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={{backgroundColor: '#ECF8F9', height: '100%'}}>
        {_renderPlatformInfo()}
        <ScrollView>
          <PlayerTemplate playerInfo={playerInfo} />
        </ScrollView>
        <FloatingActionComp actions={actions} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
