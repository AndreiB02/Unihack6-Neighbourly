import React, { useState, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchNeighbourhood } from '../../services/neighbourhood';
import { fetchEvents } from '../../services/events';
import { fetchProblems } from '../../services/problems';
import { fetchService } from '../../services/services';
import { useFocusEffect } from '@react-navigation/native';

const logo = require('../../../assets/logo.png');

const Stack = createStackNavigator();

const mockVolunteers = [
    {
        name: 'Volunteers needed for tree planting',
        host: 'Paul Davis',
        profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
        description: 'Join us for a tree planting event at the local park. We will be planting native trees to help with the environment and beautify the area. The event will run from 9 AM to 1 PM, and lunch will be provided for all volunteers.',
    },
    {
        name: 'Help with local food drive',
        host: 'Olivia Harris',
        profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
        description: 'Volunteer to help with the local food drive. We are collecting non-perishable food items for families in need. Help is needed for sorting and packing food donations. Volunteers are needed from 10 AM to 4 PM.',
    },
    {
        name: 'Assist with senior citizens event',
        host: 'James Wilson',
        profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
        description: 'Assist in organizing an event for senior citizens. We will be hosting a community event with games, food, and entertainment. Volunteers are needed to help with setup, serving food, and guiding activities. Event will take place at the local senior center.',
    }
];

const HomeScreen = ({ navigation, route}) => {

    const user_id = route.params?.user_id; 
    const username = route.params?.username;
    const points = route.params?.points;
    const neighbourhood_id = route.params?.neighbourhood_id;
    const profileImage = route.params?.profileImage;

    const [events, setEvents] = useState([]);
    const [problems, setProblems] = useState([]);
    const [services, setServices] = useState([]);

    //title of heighbourhood displayed on top of home screen
    const [neighbourhoodName, setNeighbourhoodName] = useState("");
    useFocusEffect(
        useCallback (() => {
            fetch_Neighbourhood();
            fetch_Events();
            fetch_Problems();
            fetch_Services();
        }, [neighbourhood_id])
    );

    const fetch_Neighbourhood = async () => {
        try {
            const response = await fetchNeighbourhood(neighbourhood_id);
            if (response.length > 0) {
                setNeighbourhoodName(response[0].name);
            }
        } catch (error) {
            console.error('Error fetching neighbourhood', error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };

    const fetch_Events = async () => {
        try {
            const response = await fetchEvents(neighbourhood_id);
            if (response) {
                setEvents(response);
            }
        } catch (error) {
            console.error('Error fetching events', error);
        }
    };

    const fetch_Problems = async () => {
        try {
            const response = await fetchProblems(neighbourhood_id);
            if (response) {
                setProblems(response);
            }
        } catch (error) {
            console.error('Error fetching problems', error);
        }
    };

    const fetch_Services = async () => {
        try {
            const response = await fetchService(neighbourhood_id);
            if (response) {
                setServices(response);
            }
        } catch (error) {
            console.error('Error fetching services', error);
        }
    };

    console.log("IN HOMESCREEN", username);

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile',{username:username,points:points, neighbourhood_id: neighbourhood_id, profileImage: profileImage})}>
                    <Image
                        source={{ uri: profileImage ? profileImage:'https://pbs.twimg.com/media/EEUy6MCU0AErfve.png'}}
                        style={styles.avatar}
                    />
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.neighborhoodTitle}>🏠{neighbourhoodName}</Text>
                    <Text style={styles.subHeader}>Neighbourhood</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <CoFunds navigation={navigation} />
                <Sections navigation={navigation} neighbourhood_id={neighbourhood_id} user_id ={user_id} events={events} problems={problems} services={services} username={username}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const Sections = ({ navigation, neighbourhood_id, user_id, events, problems, services, username}) => (
    <View style={styles.sectionsContainer}>
        <Section title="Offering services" screenName="OfferServiceScreen" navigation={navigation} data={services} user_id={user_id}/>
        <Section title="Requesting services" screenName="AskServiceScreen" navigation={navigation} data={problems} user_id={user_id}/>
        <Section title="Events" screenName="EventServiceScreen" navigation={navigation} data={events} neighbourhood_id={neighbourhood_id} user_id={username}/>
        <Section title="Volunteers Needed" screenName="CommunityServiceScreen" navigation={navigation} data={mockVolunteers} user_id={user_id}/>
    </View>
);

const Section = ({ title, screenName, navigation, data, neighbourhood_id, user_id}) => (
    <>
        <TouchableOpacity onPress={() => navigation.navigate(screenName, {neighbourhood_id:neighbourhood_id, data:data, user_id:user_id})} style={styles.sectionTouchable}>
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeader}>{title}</Text>
                <Icon name="chevron-forward-outline" size={24} color="#4CAF50" style={styles.arrowIcon} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
            {data.map((item, index) => (
                <MiniCard key={index} item={item} />
            ))}
        </ScrollView>
    </>
);

const MiniCard = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    return (
        <>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image source={{ uri: item.profileImage ? item.profileImage:'https://pbs.twimg.com/media/EEUy6MCU0AErfve.png'}} style={styles.avatar} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle} numberOfLines={2}>{item.name}</Text>
                            <Text style={styles.cardhost} numberOfLines={1}>{item.host}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Modal for More Information */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Image source={{ uri: item.profileImage ? item.profileImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png' }} style={styles.modalAvatar} />
                        <Text style={styles.modalTitle}>{item.name}</Text>
                        <Text style={styles.modalDescription}>{item.description}</Text>
                        <TouchableOpacity
                            style={styles.joinButton}
                            onPress={() => {
                                // Handle Join/Help button press
                                console.log('Joined Help');
                                setModalVisible(false); // Close modal after action
                            }}
                        >
                            <Text style={styles.joinButtonText}>Join/Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const CoFunds = ({ navigation }) => (
    <View style={styles.coFundsContainer}>
        <Text style={styles.coFundsHeader}>CoFunds</Text>
        <Text style={styles.coFundsText}>
            Join our community funding initiatives to make a difference!
        </Text>
        <TouchableOpacity
            style={styles.coFundsButton}
            onPress={() => navigation.navigate('CoFundScreen')}
        >
            <Text style={styles.coFundsButtonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#F3F7F6',
    },
    scrollContainer: {
        paddingTop: 100,
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 3,
        zIndex: 1000,
    },
    neighborhoodTitle: {
        fontWeight: '700',
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
    headerCenter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: 70,
        height: 40,
    },
    sectionTouchable: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#F3F7F6',
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#388E3C',
    },
    arrowIcon: {
        marginLeft: 5,
    },
    cardContainer: {
        paddingLeft: 16,
    },
    card: {
        width: 160,
        height: 80,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 3,
    },
    cardhost: {
        fontSize: 12,
        color: '#757575',
    },
    coFundsContainer: {
        backgroundColor: '#E8F5E9',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        margin: 12,
    },
    coFundsHeader: {
        fontSize: 26,
        fontWeight: '700',
        color: '#388E3C',
        marginBottom: 10,
    },
    coFundsText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 15,
    },
    coFundsButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
    },
    coFundsButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
    },
    modalAvatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 20,
    },
    modalTitle: {
        fontWeight: '700',
        fontSize: 20,
        color: '#2E7D32',
    },
    modalDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
    },
    joinButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    closeButtonText: {
        color: '#555',
        fontSize: 16,
    },
});



export default HomeScreen;