import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {PLAYER_01, PLAYER_02} from '../../assests/images';

const UnsoldPlayersScreen = () => {
  const teamsInfo = [
    {
      team_no: 1,
      name: 'Rocky Boys',
      pl_img: PLAYER_02,
      team_member: ['Shashi', 'Anand', 'Srikant'],
    },
    {
      team_no: 2,
      name: 'Team Virat',
      pl_img: PLAYER_01,
      team_member: [],
    },
    {
      team_no: 3,
      name: 'Team Virat',
      pl_img: PLAYER_01,
      team_member: [],
    },
    {
      team_no: 4,
      name: 'Team Virat',
      pl_img: PLAYER_01,
      team_member: [],
    },
    {
      team_no: 5,
      name: 'Team Virat',
      pl_img: PLAYER_01,
      team_member: [],
    },
  ];

  const _renderItem = ({item}: any) => {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.pl_img_containerStyle}>
          <View>
            <Image
              source={item?.pl_img}
              resizeMode="stretch"
              style={styles.imageStyle}
            />
          </View>
        </View>

        <Text style={styles.plInfoTextStyle}>
          {`Team No: ${item?.team_no}`}
        </Text>
        <Text style={styles.plInfoTextStyle}>{`Team Name: ${item?.name}`}</Text>
        <View style={styles.horizontalLineStyle} />
      </View>
    );
  };
  const _renderUnsoldPlayers = () => {
    return (
      <View>
        <FlatList
          data={teamsInfo}
          keyExtractor={item => item?.team_no}
          showsHorizontalScrollIndicator={false}
          renderItem={_renderItem}
        />
      </View>
    );
  };
  return (
    <View>
      <ScrollView>{_renderUnsoldPlayers()}</ScrollView>
    </View>
  );
};
export default UnsoldPlayersScreen;
