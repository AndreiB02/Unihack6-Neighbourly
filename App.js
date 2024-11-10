import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/MainPage/HomeScreen'; 
import AddAccount from './screens/MainPage/CreateAccount/AddAccount'; 
import LoginPage from './screens/LoginPage/LoginPage';
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
import NeighbourhoodPortal from './screens/MainPage/ProfilePage/NeighbourhoodPortal';
import AddAskScreen from './screens/MainPage/Ask/AddAskScreen';
import AboutApp from './screens/MainPage/AboutApp';
import OfferingCardComponent from './screens/MainPage/Components/OfferingCardComponent';
import CoFundScreen from './screens/CoFound/CoFundScreen';
import TopMembersScreen from './screens/MainPage/ProfilePage/TopMembersScreen';

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
        <Stack.Screen name="PossessionsSeeMore" component={PossessionsSeeMore} />
        <Stack.Screen name="NeighborhoodSeeMore" component={NeighborhoodSeeMore} />
        <Stack.Screen name="NeighbourhoodPortal" component={NeighbourhoodPortal} options={{ title: 'Neighbourhood' }} />
        <Stack.Screen name="OfferingCardComponent" component={OfferingCardComponent} options={{ title: 'Offering Services' }} />
        <Stack.Screen name="AboutApp" component={AboutApp} options={{ title: 'About' }} />
        <Stack.Screen name="CoFundScreen" component={CoFundScreen} options={{ title: 'CoFund' }} />
        <Stack.Screen name="TopMembersScreen" component={TopMembersScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
