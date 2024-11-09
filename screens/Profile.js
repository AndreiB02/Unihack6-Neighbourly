// Profile.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
    const [points, setPoints] = useState(150);

    const possessionsData = [
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ];

    const neighborhoodData = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
        { id: '4', name: 'Diana' },
        { id: '5', name: 'Eve' },
        { id: '6', name: 'Frank' },
        { id: '7', name: 'Grace' },
        { id: '8', name: 'Hank' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.gender}>Male</Text>
                </View>
                <View style={styles.pointsSection}>
                    <Icon name="star" size={30} color="#ffd700" style={styles.pointsIcon} />
                    <Text style={styles.pointsText}>{points} Points</Text>
                </View>
            </View>

            <View style={styles.mainContent}>
                <View style={styles.profileSection}>
                    <Text style={styles.sectionTitle}>Possessions</Text>
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

                <View style={styles.neighborhoodSection}>
                    <Text style={styles.sectionTitle}>Neighborhood</Text>
                    <View style={styles.neighborhoodContainer}>
                        <FlatList
                            data={neighborhoodData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.neighborCard}>
                                    <Icon name="person-circle" size={40} color="#4CAF50" />
                                    <Text style={styles.neighborName}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    profileContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        marginRight: 10,
        height: 160,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    gender: {
        fontSize: 14,
        color: '#666',
    },
    pointsSection: {
        flex: 1,
        backgroundColor: '#fff8dc',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        height: 160,
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    tableContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 200,
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
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        height: 200,
    },
    neighborCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    neighborName: {
        fontSize: 16,
        color: '#444',
        marginLeft: 10,
    },
});

export default Profile;
