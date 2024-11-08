import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Update the import path as necessary
import AddAccount from './screens/CreateAccount/AddAccount'; // Update the import path as necessary
import LoginPage from './screens/LoginPage/LoginPage';
import OfferServiceScreen from './screens/OfferServiceScreen';
import AddOfferScreen from './screens/AddOfferScreen';
import Profile from './screens/Profile';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddAccount" component={AddAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OfferServiceScreen" component={OfferServiceScreen} options={{ title: 'Offer Service' }} />
        <Stack.Screen name="AddOfferScreen" component={AddOfferScreen} options={{ title: 'Add New Offer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
