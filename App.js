import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/MainPage/HomeScreen'; // Update the import path as necessary
import AddAccount from './screens/MainPage/CreateAccount/AddAccount'; // Update the import path as necessary
import LoginPage from './screens/LoginPage/LoginPage';
import OfferServiceScreen from './screens/Offer/OfferServiceScreen';
import AddOfferScreen from './screens/Offer/AddOfferScreen';
import AskServiceScreen from './screens/MainPage/Ask/AskServiceScreen';
import Profile from './screens/MainPage/ProfilePage/Profile';
import EventServiceScreen from './screens/MainPage/Events/EventServiceScreen';
import AddEventScreen from './screens/MainPage/Events/AddEventScreen';
import JoinEvent from './screens/MainPage/Events/JoinEvent';
import AddCommunityServiceScreen from './screens/MainPage/Comunty/AddCommunityServiceScreen';
import CommunityServiceScreen from './screens/MainPage/Comunty/CommunityServiceScreen';
import PossessionsSeeMore from './screens/MainPage/ProfilePage/SeeMore/PossessionsSeeMore';
import NeighborhoodSeeMore from './screens/MainPage/ProfilePage/SeeMore/NeighborhoodSeeMore';
import CoFundScreen from './screens/CoFound/CoFundScreen';
import NeighbourhoodPortal from './screens/MainPage/ProfilePage/NeighbourhoodPortal';
import AddAskScreen from './screens/MainPage/Ask/AddAskScreen';
import AboutApp from './screens/MainPage/AboutApp';
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
        <Stack.Screen name="AskServiceScreen" component={AskServiceScreen} options={{ title: 'Ask Service' }} />
        <Stack.Screen name="AddAskScreen" component={AddAskScreen} options={{ title: 'Add New Need' }} />
        <Stack.Screen name="EventServiceScreen" component={EventServiceScreen} options={{ title: 'Events' }} />
        <Stack.Screen name="AddEventScreen" component={AddEventScreen} options={{ title: 'Add New Event' } }/>
        <Stack.Screen name="JoinEvent" component={JoinEvent} options={{ title: 'Join A New Event' }} />
        <Stack.Screen name="AddCommunityServiceScreen" component={AddCommunityServiceScreen} options={{ title: 'Create A New Event' }} />
        <Stack.Screen name="ComunityServiceScreen" component={CommunityServiceScreen} options={{ title: 'Join A New Event' }} />
        <Stack.Screen name="PossessionsSeeMore" component={PossessionsSeeMore} />
        <Stack.Screen name="NeighborhoodSeeMore" component={NeighborhoodSeeMore} />
        <Stack.Screen name="CoFundScreen" component={CoFundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NeighbourhoodPortal" component={NeighbourhoodPortal} options={{ title: 'Neighbourhood' }}  />
        <Stack.Screen name="AboutApp" component={AboutApp} options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
