import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Update the import path as necessary
import AddAccount from './screens/CreateAccount/AddAccount'; // Update the import path as necessary
import LoginPage from './screens/LoginPage/LoginPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddAccount" component={AddAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
