import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchNeighbourhood } from '../../services/neighbourhood';
import { fetchEvents } from '../../services/events';

const logo = require('../../../assets/logo.png');

const Stack = createStackNavigator();

const mockOffers = [
    {
        name: 'Available for babysitting',
        host: 'Karina Barbul',
        profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
        description: 'Offering babysitting services for children of all ages. I have over 5 years of experience and I am certified in CPR and first aid. Available for day or night shifts, weekends included.',
    },
    {
        name: 'Available for pet-sitting',
        host: 'John Doe',
        profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        description: 'Pet-sitting services for your furry friends. I will take care of your pets as if they were my own. I offer daily walks, feeding, and playtime. Flexible scheduling based on your needs.',
    },
    {
        name: 'Offering lawn care services',
        host: 'Mike Lee',
        profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        description: 'Providing lawn mowing, trimming, and yard cleanup services. I have all the necessary equipment to maintain your lawn, ensuring a neat and healthy appearance. Available weekly or as needed.',
    }
];

const mockRequests = [
    {
        name: 'Need help moving furniture',
        host: 'Samantha Clark',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        description: 'Looking for help to move furniture from one house to another. I need strong hands to lift heavy items such as a couch, bookshelves, and beds. Preferably on a weekend. Willing to pay for your time.',
    },
    {
        name: 'Looking for a tutor for math',
        host: 'David Smith',
        profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
        description: 'Seeking a tutor for high school-level math, including algebra and calculus. Must be patient and able to explain concepts clearly. I am available on evenings after 5 PM. Looking for someone who is experienced with tutoring.',
    },
    {
        name: 'Seeking dog walker',
        host: 'Emily White',
        profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
        description: 'Need help walking my dog during the day. My dog is a friendly labrador who loves to go on walks. The walk should be around 45 minutes, and I need someone who can commit to daily walks during weekdays.',
    }
];

const mockEvents = [
    {
        name: 'Neighborhood BBQ',
        host: 'Sarah Johnson',
        profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
        description: 'Join us for a fun BBQ event at the local park. Enjoy delicious food, live music, and games for the entire family. Everyone is welcome, just bring your favorite dish or beverage. The event is free but donations are appreciated.',
    },
    {
        name: 'Book Club Meetup',
        host: 'Daniel Brown',
        profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
        description: 'Come join our neighborhood book club to discuss this month’s selection: "The Great Gatsby". We meet once a month at the local coffee shop. New members are always welcome, and we encourage lively discussion and new perspectives.',
    },
    {
        name: 'Community Yard Sale',
        host: 'Jessica Green',
        profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
        description: 'Participate in the community yard sale this weekend. It’s a great opportunity to declutter your home and find some hidden treasures. The yard sale will run from 8 AM to 2 PM, and everyone is invited to come by and browse or sell items.',
    }
];

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

    const username = route.params?.username;
    const points = route.params?.points;
    const neighbourhood_id = route.params?.neighbourhood_id;

    const [events, setEvents] = useState([]);

    //title of heighbourhood displayed on top of home screen
    const [neighbourhoodName, setNeighbourhoodName] = useState("");
    useEffect(() => {
        fetch_Neighbourhood();
        fetch_Events();
    }, [neighbourhood_id]);

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
            const response = await fetchEvents(neighbourhood_id)
            if (response) {
                setEvents(response);
            }
        } catch (error) {
            console.error('Error fetching members', error);
        }
    };

    console.log("IN HOMESCREEN", username);

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile',{username:username,points:points, neighbourhood_id: neighbourhood_id})}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
                        style={styles.avatar}
                    />
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.neighborhoodTitle}>{neighbourhoodName}</Text>
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
                <Sections navigation={navigation} neighbourhood_id={neighbourhood_id} events={events}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const Sections = ({ navigation, neighbourhood_id, events}) => (
    <View style={styles.sectionsContainer}>
        <Section title="Offering Services" screenName="OfferServiceScreen" navigation={navigation} data={mockOffers} />
        <Section title="Requesting Services" screenName="AskServiceScreen" navigation={navigation} data={mockRequests} />
        <Section title="Events" screenName="EventServiceScreen" navigation={navigation} data={events} neighbourhood_id={neighbourhood_id}/>
        <Section title="Volunteers Needed" screenName="CommunityServiceScreen" navigation={navigation} data={mockVolunteers} />
    </View>
);

const Section = ({ title, screenName, navigation, data, neighbourhood_id}) => (
    <>
        <TouchableOpacity onPress={() => navigation.navigate(screenName, {neighbourhood_id:neighbourhood_id})} style={styles.sectionTouchable}>
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
                        <Image source={{ uri: item.profileImage }} style={styles.avatar} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle} numberOfLines={2}>{item.name}</Text>
                            <Text style={styles.cardhost}>{item.host}</Text>
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
                        <Image source={{ uri: item.profileImage }} style={styles.modalAvatar} />
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