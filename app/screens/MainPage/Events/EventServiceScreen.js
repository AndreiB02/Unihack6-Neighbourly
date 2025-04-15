import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventCardComponent from '../Components/EventCardComponent'; // Adjust the path if needed
import { fetchEvents, fetchMyEvents } from '../../../services/events';
import { useFocusEffect } from '@react-navigation/native';

const EventServiceScreen = ({ navigation, route }) => {
    const [events, setEvents] = useState([]);
    const [myEvents, setMyEvents] = useState ([]);
    console.log("routeparams in event service screen",route.params?.neighbourhood_id);
    const neighbourhood_id = route.params?.neighbourhood_id;

    //nota: user_id e de fapt "username"-ul aici
    const user_id = route.params?.user_id;

    // Function to load events
    const loadEvents = async () => {
        try {
            const response = await fetchEvents(neighbourhood_id);
            // Ensure the response is always an array
            console.log('Fetched events:', response);
            setEvents(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error('Error fetching events:', error);
            setEvents([]); // Set to empty array if error occurs
        }
    };

    const loadMyEvents = async () => {
        try {
            const response = await fetchMyEvents(user_id);
            // Ensure the response is always an array
            console.log('Fetched events:', response);
            setMyEvents(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error('Error fetching events:', error);
            setMyEvents([]); // Set to empty array if error occurs
        }
    };


    // Fetch events when component mounts or when the screen comes into focus
    useFocusEffect(
        React.useCallback(() => {
            loadEvents(); // Refetch events when screen is focused
            loadMyEvents();
        }, [])
    );

    console.log("user: ", user_id, "  neighbourhood: ", neighbourhood_id    )

    return (
        <View style={styles.container}> 
            <Text style={styles.HeaderTitle}>My Events</Text>  
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                {myEvents.length > 0 ? (
                    myEvents.map((event) => (
                        <EventCardComponent key={event.id} event={event} />
                    ))
                ) : (
                    <Text>You have no events created.</Text> // You can add a fallback UI
                )}
            </ScrollView>

            <Text style={styles.HeaderTitle}>Upcoming Events</Text>  

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {events.length > 0 ? (
                    events.map((event) => (
                        <EventCardComponent key={event.id} event={event} />
                    ))
                ) : (
                    <Text>No events available</Text> // You can add a fallback UI
                )}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddEventScreen', {neighbourhood_id:neighbourhood_id, user_id: user_id})}
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
    HeaderTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#388E3C',
        padding: 17,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#4CAF50',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
    addButtonText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EventServiceScreen;
