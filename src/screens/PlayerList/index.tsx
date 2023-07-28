import React, {useState} from 'react';
import {View, Text, Button, FlatList, Modal, TextInput} from 'react-native';

const PlayerList = () => {
  const [players, setPlayers] = useState([
    {name: 'Player 1', status: 'unsold'},
    {name: 'Player 2', status: 'unsold'},
    // Add more players here...
  ]);

  const [teams, setTeams] = useState({
    Team1: [],
    Team2: [],
    // Add more teams here...
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [teamNameInput, setTeamNameInput] = useState('');

  const handleSold = playerName => {
    setSelectedPlayer(playerName);
    setModalVisible(true);
  };

  const handleUnsold = playerName => {
    const updatedPlayers = players.map(player =>
      player.name === playerName ? {...player, status: 'unsold'} : player,
    );
    setPlayers(updatedPlayers);
  };

  const handleMoveToTeam = () => {
    const selectedPlayerData = players.find(
      player => player.name === selectedPlayer,
    );
    const updatedPlayers = players.filter(
      player => player.name !== selectedPlayer,
    );

    const updatedTeams = {
      ...teams,
      [teamNameInput]: [...teams[teamNameInput], selectedPlayerData],
    };

    setPlayers(updatedPlayers);
    setTeams(updatedTeams);
    setModalVisible(false);
    setSelectedPlayer(null);
    setTeamNameInput('');
  };

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>Status: {item.status}</Text>
      <Button
        title="Sold"
        onPress={() => handleSold(item.name)}
        disabled={item.status === 'sold'}
      />
      <Button
        title="Unsold"
        onPress={() => handleUnsold(item.name)}
        disabled={item.status === 'unsold'}
      />
    </View>
  );

  return (
    <View>
      <Text>Players:</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View>
          <Text>Enter the team name:</Text>
          <TextInput
            value={teamNameInput}
            onChangeText={text => setTeamNameInput(text)}
          />
          <Button title="Save" onPress={handleMoveToTeam} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Text>Sold Players:</Text>
      <FlatList
        data={players.filter(player => player.status === 'sold')}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />

      <Text>Unsold Players:</Text>
      <FlatList
        data={players.filter(player => player.status === 'unsold')}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />

      <Text>Teams:</Text>
      {/* Render the list of teams and their players */}
      {/* You can customize the display based on your preference */}
      <Text>{JSON.stringify(teams)}</Text>
    </View>
  );
};

export default PlayerList;
