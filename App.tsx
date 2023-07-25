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
  FlatList,
} from 'react-native';
import {PLATFORM_LOGO, PLAYER_01} from './src/assests/images';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
      name: 'Ganesh Benny',
      role: 'All Rounder',
      bt_style: 'Right Hand Bat',
      bl_style: 'Right Arm Fast',
    },
  ];
  const _renderPlatformInfo = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View>
          <Image
            source={PLATFORM_LOGO}
            style={{height: 180, width: 180, borderRadius: 10, margin: 10}}
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
  const _renderPlayerImage = () => {
    return (
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={PLAYER_01}
            resizeMode="stretch"
            style={{
              height: 150,
              width: 150,
              borderRadius: 10,
              margin: 30,
              borderColor: 'black',
              borderWidth: 2,
            }}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 160,
            backgroundColor: '#14226b',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#ffffff',
            }}>
            Base Price 1000₹
          </Text>
        </View>
      </View>
    );
  };
  const _renderItem = ({item}: any) => {
    return (
      <View
        style={{
          marginHorizontal: 25,
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            margin: 6,
          }}>
          {`Player No: ${item?.player_no}`}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            margin: 6,
          }}>
          {`Player Name: ${item?.name}`}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            margin: 6,
          }}>
          {`Player Role: ${item?.role}`}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            margin: 6,
          }}>
          {`Batting Style: ${item?.bt_style}`}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            margin: 6,
          }}>
          {`Bowling Style: ${item?.bl_style}`}
        </Text>
      </View>
    );
  };
  const _renderPlayerInfo = () => {
    return (
      <FlatList
        data={playerInfo}
        // keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={_renderItem}
      />
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
        {_renderPlayerImage()}
        {_renderPlayerInfo()}
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
