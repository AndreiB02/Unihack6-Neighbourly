import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/MainPage/HomeScreen'; 
import AddAccount from './app/screens/MainPage/CreateAccount/AddAccount'; 
import LoginPage from './app/screens/LoginPage/LoginPage';
import AddOfferScreen from './app/screens/Offer/AddOfferScreen';
import AskServiceScreen from './app/screens/MainPage/Ask/AskServiceScreen';
import Profile from './app/screens/MainPage/ProfilePage/Profile';
import EventServiceScreen from './app/screens/MainPage/Events/EventServiceScreen';
import AddEventScreen from './app/screens/MainPage/Events/AddEventScreen';
import JoinEvent from './app/screens/MainPage/Events/JoinEvent';
import AddCommunityServiceScreen from './app/screens/MainPage/Comunty/AddCommunityServiceScreen';
import CommunityServiceScreen from './app/screens/MainPage/Comunty/CommunityServiceScreen';
import PossessionsSeeMore from './app/screens/MainPage/ProfilePage/SeeMore/PossessionsSeeMore';
import NeighborhoodSeeMore from './app/screens/MainPage/ProfilePage/SeeMore/NeighborhoodSeeMore';
import NeighbourhoodPortal from './app/screens/MainPage/ProfilePage/NeighbourhoodPortal';
import AddAskScreen from './app/screens/MainPage/Ask/AddAskScreen';
import AboutApp from './app/screens/MainPage/AboutApp';
import OfferingCardComponent from './app/screens/MainPage/Components/OfferingCardComponent';
import CoFundScreen from './app/screens/CoFound/CoFundScreen';
import TopMembersScreen from './app/screens/MainPage/ProfilePage/TopMembersScreen';
import JoinService from './app/screens/MainPage/Comunty/JoinService';
import EditProfileScreen from './app/screens/MainPage/ProfilePage/EditProfileScreen';
import OfferServiceScreen from './app/screens/Offer/OfferServiceScreen';

// Initialize the Stack Navigator here

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddAccount" component={AddAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddOfferScreen" component={AddOfferScreen} options={{ title: 'Create a New Offer' }} />
        <Stack.Screen name="AskServiceScreen" component={AskServiceScreen} options={{ title: 'Requesting Services' }} />
        <Stack.Screen name="AddAskScreen" component={AddAskScreen} options={{ title: 'Create a New Request' }} />
        <Stack.Screen name="EventServiceScreen" component={EventServiceScreen} options={{ title: 'Events' }} />
        <Stack.Screen name="AddEventScreen" component={AddEventScreen} options={{ title: 'Create a New Event' }} />
        <Stack.Screen name="JoinEvent" component={JoinEvent} options={{ title: 'Join a New Event' }} />
        <Stack.Screen name="AddCommunityServiceScreen" component={AddCommunityServiceScreen} options={{ title: 'Create a Volunteers Needed Activities' }} />
        <Stack.Screen name="CommunityServiceScreen" component={CommunityServiceScreen} options={{ title: 'Join a Volunteering Needed Activity' }} />
        <Stack.Screen name="PossessionsSeeMore" component={PossessionsSeeMore} options={{title: 'Possessions'}} />
        <Stack.Screen name="NeighborhoodSeeMore" component={NeighborhoodSeeMore} options={{title: 'Neighbourhood'}}/>
        <Stack.Screen name="NeighbourhoodPortal" component={NeighbourhoodPortal} options={{  headerShown: false  }}  />
        <Stack.Screen name="OfferServiceScreen" component={OfferServiceScreen} options={{ title: 'Offering Services' }} />
        <Stack.Screen name="AboutApp" component={AboutApp} options={{ title: 'About' }} />
        <Stack.Screen name="CoFundScreen" component={CoFundScreen} options={{ title: 'CoFund' }} />
        <Stack.Screen name="TopMembersScreen" component={TopMembersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JoinService" component={JoinService} options={{ title: 'Points' }} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
