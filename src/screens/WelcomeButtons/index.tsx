import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export interface WelcomeButtonsProps {}

export const WelcomeButtons = ({}: WelcomeButtonsProps) => {
  const _renderSoldPlayersButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.soldOrUnsoldBtnContainerStyle}
          activeOpacity={0.7}>
          <Text style={styles.btnsTextStyle}>Sold Players</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const _renderUnSoldPlayersButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.soldOrUnsoldBtnContainerStyle}
          activeOpacity={0.7}>
          <Text style={styles.btnsTextStyle}>UnSold Players</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const _renderPlayersButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.allPlayersBtnContainerStyle}
          activeOpacity={0.7}>
          <Text style={styles.btnsTextStyle}>All Players</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.containerStyle}>
        {_renderSoldPlayersButton()}
        {_renderUnSoldPlayersButton()}
      </View>
      {_renderPlayersButton()}
    </View>
  );
};

WelcomeButtons.defaultProps = {};
