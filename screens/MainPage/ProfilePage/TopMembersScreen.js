import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Using Ionicons for the star icon

const TopMembers = ({navigation}) => {
    const membersData = [
        { id: '1', name: 'Alice', points: 400, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { id: '2', name: 'Bob', points: 200, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { id: '3', name: 'Charlie', points: 150, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: '4', name: 'Diana', points: 50, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: '5', name: 'Eve', points: 100, avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { id: '6', name: 'Frank', points: 80, avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { id: '7', name: 'Grace', points: 120, avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { id: '8', name: 'Hank', points: 300, avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
    ];

    // Sort members by points in descending order
    const sortedMembers = membersData.sort((a, b) => b.points - a.points);

    
    return (
        <View style={styles.container}>
            {/* Introduction Section */}
            <View style={styles.introSection}>
                <Text style={styles.title}>Top Members</Text>
                <Text style={styles.description}>
                    Here are the top members based on their points. The higher the points, the more stars they have earned!
                </Text>
            </View>

            {/* Best Member at the top center */}
            <View style={styles.topMember}>
                <Image source={{ uri: sortedMembers[0].avatar }} style={styles.avatar} />
                <Text style={styles.name}>{sortedMembers[0].name}</Text>
                <Text style={styles.points}>
                    {sortedMembers[0].points} <Icon name="star" size={20} color="#ffd700" />
                </Text>
                <Text style={styles.badge}>Gold Star</Text>
            </View>

            {/* Section for other members */}
            <Text style={styles.sectionTitle}>Other Members</Text>

            {/* Members list (2 columns) */}
            <FlatList
                data={sortedMembers.slice(1)}  // Skip the best member (already shown at the top)
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.memberCard}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.points}>
                            {item.points} <Icon name="star" size={20} color="#ffd700" />
                        </Text>
                    </View>
                )}
                columnWrapperStyle={styles.columnWrapper}
            />

            {/* See More Button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NeighborhoodSeeMore')}>
                <Text style={styles.buttonText}>See More Members</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    introSection: {
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
    topMember: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ffe0b2', // Light orange background for highlight
        padding: 15,
        borderRadius: 15,
        elevation: 5,
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    points: {
        fontSize: 18,
        color: '#333',
        marginTop: 5,
    },
    badge: {
        fontSize: 20,
        color: 'black', // Gold color for the badge
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    memberCard: {
        width: '45%',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: '2.5%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TopMembers;
