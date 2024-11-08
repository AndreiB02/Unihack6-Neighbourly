// Profile.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
    // Starting points for demonstration
    const [points, setPoints] = useState(150);

    // Possessions data (can be dynamic from a database)
    const possessionsData = [
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} // Placeholder image
                    style={styles.avatar}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.gender}>Male</Text>
            </View>

            {/* Points Section */}
            <View style={styles.pointsSection}>
                <Text style={styles.sectionTitle}>Your Points</Text>
                <View style={styles.pointsCard}>
                    <Icon name="star" size={30} color="#ffd700" style={styles.pointsIcon} />
                    <Text style={styles.pointsText}>{points} Points</Text>
                    <Text style={styles.pointsDescription}>Earn points by completing tasks and achievements!</Text>
                </View>
            </View>

            <View style={styles.profileSection}>
                <Text style={styles.sectionTitle}>Possessions</Text>

                {/* FlatList for Possessions */}
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
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#ffffff',
        marginBottom: 10,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    gender: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    profileSection: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    tableContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        fontSize: 18,
        color: '#444',
        flex: 1,
        textAlign: 'center',
    },
    pointsSection: {
        marginBottom: 25,
    },
    pointsCard: {
        backgroundColor: '#fff8dc', // Light golden color for the points card
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        alignItems: 'center',
    },
    pointsText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    pointsIcon: {
        marginBottom: 10,
    },
    pointsDescription: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default Profile;
