import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();

    const [points, setPoints] = useState(150);

    const possessionsData = [
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ];

    const renderHeader = () => (
        <View>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.gender}>Male</Text>
            </View>

            {/* My Neighbourhood Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.neighbourhoodButton}
                    onPress={() => navigation.navigate('Neighbourhood')}
                >
                    <Text style={styles.buttonText}>Go to My Neighbourhood</Text>
                </TouchableOpacity>
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

            {/* Possessions Section Title */}
            <Text style={styles.sectionTitle}>Possessions</Text>
        </View>
    );

    const renderPossession = ({ item }) => (
        <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.item}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
        </View>
    );

    return (
        <FlatList
            data={possessionsData}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={renderHeader}
            renderItem={renderPossession}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
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
    buttonContainer: {
        marginBottom: 25,
        alignItems: 'center',
    },
    neighbourhoodButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pointsSection: {
        marginBottom: 25,
    },
    pointsCard: {
        backgroundColor: '#fff8dc',
        padding: 20,
        borderRadius: 10,
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
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
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
});

export default Profile;
