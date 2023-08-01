import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../src/screens/Welcome';
import AllTeamsScreen from '../src/screens/AllTeams';
import SoldPlayersScreen from '../src/screens/SoldPlayersScreen';
import UnsoldPlayersScreen from '../src/screens/UnsoldPlayersScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="All Teams" component={AllTeamsScreen} />
        <Stack.Screen name="Sold Players" component={SoldPlayersScreen} />
        <Stack.Screen name="Unsold Players" component={UnsoldPlayersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
