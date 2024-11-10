import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import { fetchEventItems } from '../../../services/events';
import { fetchItemById } from '../../../services/item'; // Import the function we created earlier
import { useFocusEffect } from '@react-navigation/native';

const EventCardComponent = ({ event }) => {
    const navigation = useNavigation();

    // Define local state for needs
    const [needs, setNeeds] = useState([]);
    const profileImage = event?.profileImage || 'https://cdn-icons-png.flaticon.com/512/4211/4211763.png';
    const title = event?.name || 'Untitled Event';
    const organizer = event?.host || 'Unknown Organizer';
    const description = event?.description || 'No description available';
    const date = event?.date || 'TBD';
    const location = event?.location || 'Location unknown';

    // Load event items and update the needs state
    const loadEventItems = async () => {
        try {
            const response = await fetchEventItems(event.id);

            // Map the response to match expected structure in component
            const formattedNeeds = await Promise.all(response.map(async (item) => {
                const itemResponse = await fetchItemById(item.item_id);
                const itemName = itemResponse[0]?.name || `Item ${item.item_id}`; // Fallback if no name is found
                return {
                    item_id: item.item_id, // Add item_id here
                    itemName,
                    fulfilled: item.current_quantity,
                    total: item.required_quantity,
                };
            }));

            setNeeds(formattedNeeds);
            console.log('Formatted needs:', formattedNeeds);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };


    // Refetch event items when screen comes into focus
    useFocusEffect(
        React.useCallback(() => {
            loadEventItems();
        }, [])
    );

    // Helper function to format date
    const formatDate = (dateNumber) => {
        if (!dateNumber || typeof dateNumber !== 'number') return dateNumber;
        const dateString = dateNumber.toString();
        if (dateString.length !== 8) return dateNumber;
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        return `${year}-${month}-${day}`;
    };

    const formattedDate = formatDate(date);

    return (
        <View style={styles.cardContainer}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image source={{ uri: `${profileImage}` }} style={styles.profileImage} />
                <View style={styles.profileDetails}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardName}>Organized by: {organizer}</Text>
                </View>
            </View>

            {/* Description */}
            <Text style={styles.cardDescription}>{description}</Text>

            {/* Date and Location */}
            <View style={styles.dateLocationContainer}>
                <Text style={styles.eventDate}>{formattedDate}</Text>
                <Text style={styles.eventLocation}>{location}</Text>
            </View>

            {/* Needs Section */}
            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Event Needs:</Text>
                {needs.length > 0 ? (
                    needs.map((need, index) => {
                        const progress = need.total ? (need.fulfilled / need.total) : 0;
                        return (
                            <View key={index} style={styles.needItemContainer}>
                                <Text style={styles.needItem}>
                                    {need.fulfilled} / {need.total} {need.itemName}
                                </Text>
                                <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />
                            </View>
                        );
                    })
                ) : (
                    <Text>No needs listed for this event</Text>
                )}
            </View>

            <TouchableOpacity
                style={styles.joinButton}
                onPress={() => navigation.navigate('JoinEvent', { event, needs })} // Pass needs with item_id included
            >
                <Text style={styles.joinButtonText}>Join Event</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileDetails: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardName: {
        fontSize: 16,
        color: '#666',
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    dateLocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    eventDate: {
        fontSize: 14,
        color: '#777',
    },
    eventLocation: {
        fontSize: 14,
        color: '#777',
    },
    needsContainer: {
        marginBottom: 10,
    },
    needsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    needItemContainer: {
        marginBottom: 5,
    },
    needItem: {
        fontSize: 14,
        color: '#555',
    },
    progressBar: {
        marginTop: 5,
        height: 10,
        borderRadius: 5,
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EventCardComponent;
