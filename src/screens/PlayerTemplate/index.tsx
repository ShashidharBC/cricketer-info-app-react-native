import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import styles from './styles';

export interface PlayerTemplateProps {
  playerInfo?: any;
}

export const PlayerTemplate = ({playerInfo}: PlayerTemplateProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [teamNameInput, setTeamNameInput] = useState('');

  const handleSold = playerName => {
    setSelectedPlayer(playerName);
    setModalVisible(true);
  };

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
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>
              {item?.pl_price === 1000
                ? `Base Price ${item?.pl_price}₹`
                : `${item?.pl_price}₹`}
            </Text>
          </View>
        </View>

        <Text style={styles.plInfoTextStyle}>
          {`Player No: ${item?.player_no}`}
        </Text>
        <Text style={styles.plInfoTextStyle}>
          {`Player Name: ${item?.name}`}
        </Text>
        <Text style={styles.plInfoTextStyle}>
          {`Player Role: ${item?.role}`}
        </Text>
        <Text style={styles.plInfoTextStyle}>
          {`Batting Style: ${item?.bt_style}`}
        </Text>
        <Text style={styles.plInfoTextStyle}>
          {`Bowling Style: ${item?.bl_style}`}
        </Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.soldAndUnsoldBtnStyle}
            activeOpacity={0.7}
            onPress={() => handleSold(item?.name)}>
            <Text style={styles.soldUnsoldBtnStyle}>Sold</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.soldAndUnsoldBtnStyle}
            activeOpacity={0.7}
            onPress={() => console.log('Item name is: ', item?.name)}>
            <Text style={styles.soldUnsoldBtnStyle}>UnSold</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLineStyle} />
      </View>
    );
  };
  const _renderPlayerInfo = () => {
    return (
      <View>
        <FlatList
          data={playerInfo}
          keyExtractor={item => item.player_no}
          showsHorizontalScrollIndicator={false}
          renderItem={_renderItem}
        />
        <Modal
          visible={modalVisible}
          animationType={'slide'}
          onRequestClose={() => setModalVisible(false)}>
          <View>
            <Text style={styles.teamNameTextStyle}>Enter the team name:</Text>
            <TextInput
              // value={teamNameInput}
              onChangeText={text => setTeamNameInput(text)}
              placeholder={'Please type here..'}
              style={{marginLeft: 20}}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.soldAndUnsoldBtnStyle}
                activeOpacity={0.7}
                onPress={() => console.log('ITEM IS SAVED...')}>
                <Text style={styles.saveCancelBtnTextStyle}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.soldAndUnsoldBtnStyle}
                activeOpacity={0.7}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.saveCancelBtnTextStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return <View>{_renderPlayerInfo()}</View>;
};

PlayerTemplate.defaultProps = {};
