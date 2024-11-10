// CommunityServiceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CommunityCardComponent from '../Components/CommunityCardComponent';

const CommunityServiceScreen = ({ navigation }) => {
    const services = [
        {
            id: '1',
            title: 'Neighborhood Clean-up',
            organizer: 'John Doe',
            phone: '123-456-7890',
            description: 'Help us clean up the streets in our neighborhood.',
            date: '2024-11-20',
            location: 'Main Street, NY',
            needs: [
                { item: 'Trash Bags', fulfilled: 10, total: 20 },
                { item: 'Gloves', fulfilled: 5, total: 10 },
            ],
        },
        {
            id: '2',
            title: 'Food Bank Volunteering',
            organizer: 'Jane Smith',
            phone: '987-654-3210',
            description: 'Join us at the local food bank to assist in packaging meals.',
            date: '2024-11-22',
            location: 'Food Bank, NY',
            needs: [
                { item: 'Boxes', fulfilled: 5, total: 10 },
                { item: 'Volunteers', fulfilled: 2, total: 10 },
            ],
        },
    ];

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.header}>Community Services</Text>
            
            <ScrollView contentContainerStyle={styles.container}>
                {services.map((service) => (
                    <TouchableOpacity
                        key={service.id}
                        onPress={() => navigation.navigate('JoinService', { service: service })} // Pass the service object as a parameter
                        
                    >
                        <CommunityCardComponent service={service} />
                    </TouchableOpacity>

                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddCommunityServiceScreen')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2E7D32',
        textAlign: 'center',
        marginVertical: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    container: {
        paddingBottom: 100,
        paddingHorizontal: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#4CAF50', 
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 7,
    },
    addButtonText: {
        fontSize: 36,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default CommunityServiceScreen;
