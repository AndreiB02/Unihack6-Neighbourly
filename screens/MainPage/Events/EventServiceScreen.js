// EventServiceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventCardComponent from '../Components/EventCardComponent'; // Adjust the path if needed

const EventServiceScreen = ({ navigation }) => {
    const events = [
        {
            id: '1',
            title: 'Community Clean-up',
            organizer: 'John Doe',
            phone: '123-456-7890',
            description: 'Join us for a community clean-up event.',
            date: '2024-11-20',
            location: 'Park Avenue, NY',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
            needs: [
                { item: 'Chairs', fulfilled: 1, total: 5 },
                { item: 'Tables', fulfilled: 3, total: 4 },
            ],
        },
        {
            id: '2',
            title: 'Yoga Session',
            organizer: 'Jane Smith',
            phone: '987-654-3210',
            description: 'Outdoor yoga for beginners. All levels welcome!',
            date: '2024-11-22',
            location: 'Sunset Park, NY',
            profileImage: 'https://www.w3schools.com/w3images/avatar5.png',
            needs: [
                { item: 'Yoga mats', fulfilled: 3, total: 5 },
                { item: 'Water bottles', fulfilled: 2, total: 5 },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Upcoming Community Events</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {events.map((event) => (
                    <TouchableOpacity 
                        key={event.id} 
                        style={styles.eventCardContainer}
                        onPress={() => navigation.navigate('JoinEventScreen', { event })}
                    >
                        <EventCardComponent event={event} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddEventScreen')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
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
    scrollContainer: {
        paddingBottom: 100,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#43a047',
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    addButtonText: {
        fontSize: 36,
        color: '#FFF',
        fontWeight: 'bold',
    },
    eventCardContainer: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 0.5,
        borderColor: '#cfd8dc',
    },
});

export default EventServiceScreen;
