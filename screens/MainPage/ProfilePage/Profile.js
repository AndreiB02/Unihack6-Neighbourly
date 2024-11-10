import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const [points, setPoints] = useState(150);
    const navigation = useNavigation();

    const possessionsData = [
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ];

    const neighborhoodData = [
        { id: '1', name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { id: '2', name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { id: '3', name: 'Charlie', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: '4', name: 'Diana', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: '5', name: 'Eve', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { id: '6', name: 'Frank', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { id: '7', name: 'Grace', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { id: '8', name: 'Hank', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
    ];


    const neighborhoodInfo = {
        name: 'GHIRODA',
        population: '10,000',
        area: '50 km²',
        established: '1850',
        nearbyLandmarks: 'Karina',
        averageIncome: '€30,000',
        mainAttractions: 'aaa',
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.profileContainer}
                    onPress={() => navigation.navigate('EditProfileScreen')} // Navigate to EditProfileScreen
                >
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.gender}>Male</Text>
                </TouchableOpacity>

                {/* Points Section */}
                <TouchableOpacity style={styles.pointsSection} onPress={() => navigation.navigate('TopMembersScreen')}>
                    <Icon name="star" size={30} color="#ffd700" style={styles.pointsIcon} />
                    <Text style={styles.pointsText}>{points} Points</Text>
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
                {/* Possessions Section */}
                <TouchableOpacity
                    style={styles.profileSection}
                    onPress={() => navigation.navigate('PossessionsSeeMore')}
                >
                    <View style={styles.possessionsTitleContainer}>
                        <Text style={styles.possessionsTitle}>Possessions</Text>
                    </View>
                    <View style={styles.tableContainer}>
                        <FlatList
                            data={possessionsData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{item.item}</Text>
                                    <Text style={styles.tableCell}>{item.quantity}</Text>
                                </View>
                            )}
                        />
                    </View>
                </TouchableOpacity>

                {/* Neighborhood Section */}
                <TouchableOpacity
                    style={styles.neighborhoodSection}
                    onPress={() => navigation.navigate('NeighborhoodSeeMore')}
                >
                    <View style={styles.neighborhoodTitleContainer}>
                        <Text style={styles.possessionsTitle}>Neighborhood</Text>
                    </View>
                    <View style={styles.neighborhoodContainer}>
                        <FlatList
                            data={neighborhoodData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.neighborCard}>
                                    <Image source={{ uri: item.avatar }} style={styles.neighborAvatar} />
                                    <Text style={styles.neighborName}>{item.name}</Text>
                                </View>
                            )}
                        />

                    </View>
                </TouchableOpacity>
            </View>

            {/* Neighborhood Info Section */}
            <TouchableOpacity
                style={styles.neighborhoodFrame}
                onPress={() => navigation.navigate('NeighbourhoodPortal')}
            >
                <View style={styles.neighborhoodImageWrapper}>
                    <Image
                        source={require('../../../assets/ghiroda.png')}
                        style={styles.neighborhoodImage}
                    />
                </View>
                <View style={styles.neighborhoodDetails}>
                    <Text style={styles.neighborhoodName}>{neighborhoodInfo.name}</Text>
                    <Text style={styles.neighborhoodDetailText}>Population: {neighborhoodInfo.population}</Text>
                    <Text style={styles.neighborhoodDetailText}>Area: {neighborhoodInfo.area}</Text>
                    <Text style={styles.neighborhoodDetailText}>Established: {neighborhoodInfo.established}</Text>
                    <Text style={styles.neighborhoodDetailText}>Nearby Landmarks: {neighborhoodInfo.nearbyLandmarks}</Text>
                    <Text style={styles.neighborhoodDetailText}>Average Income: {neighborhoodInfo.averageIncome}</Text>
                    <Text style={styles.neighborhoodDetailText}>Main Attractions: {neighborhoodInfo.mainAttractions}</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        backgroundColor: '#eceff1', // Light background for contrast
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    profileContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        marginRight: 10,
        height: 160,
        borderRadius: 15,
        borderColor: '#ddd', // Soft border
        borderWidth: 1,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ddd', // Light border around the avatar
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    gender: {
        fontSize: 14,
        color: '#666',
    },
    pointsSection: {
        flex: 1,
        backgroundColor: '#ffeb3b', // Subtle yellow accent
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        borderRadius: 15,
    },
    pointsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    pointsIcon: {
        marginBottom: 10,
    },
    mainContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileSection: {
        flex: 1,
        marginRight: 10,
    },
    neighborhoodSection: {
        flex: 1,
    },
    possessionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    possessionsTitleContainer: {
        backgroundColor: '#607d8b', // Dark grey-blue for contrast
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    tableContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 230,
        borderRadius: 5,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        fontSize: 16,
        color: '#444',
    },
    neighborhoodContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 230,
        borderRadius: 5,
    },
    neighborCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
    },
    neighborAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    neighborName: {
        fontSize: 16,
        color: '#444',
        marginLeft: 10,
    },
    seeMoreButtonContainer: {
        borderRadius: 5,
        marginTop: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        backgroundColor: '#ffffff', // Updated to white background
    },
    neighborhoodTitleContainer: {
        backgroundColor: '#607d8b',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    neighborhoodImageWrapper: {
        backgroundColor: '#4CAF50', // Light gray background, same as right-side section
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15, // Ensure it has space between details
        elevation: 5, // Adding some shadow for depth
        marginTop: 10,
        marginBottom:12,
    },
    neighborhoodFrame: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 15,
        backgroundColor: '#607d8b', // Green background to make it pop
        borderRadius: 20, // Larger border radius for a more modern look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
        height: 240, // Increased height for better content fit
        marginBottom: 20,
    },
    neighborhoodImage: {
        marginTop: 100,
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    neighborhoodDetails: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 0,
        borderRadius: 15,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#4CAF50',
        borderRadius: 20,

    },
    neighborhoodName: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        color: 'white', // White text color
        textAlign: 'center',  // This will center the text horizontally
        justifyContent: 'center',  // This centers text vertically if container is flexible
    },
    neighborhoodDetailText: {
        fontSize: 14,
        color: '#fff', // White color for neighborhood info
        marginLeft: 10,
        justifyContent: 'center',  // This centers text vertically if container is flexible
    },
});

export default Profile;
