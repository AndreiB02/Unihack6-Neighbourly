import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { updateItemCount } from '../../services/events';
const JoinEvent = ({ route, navigation }) => {
    const { event, needs } = route.params;

    // State to hold the initial needs data
    const [updatedNeeds, setUpdatedNeeds] = useState(needs || []);
    // State to temporarily store user input for each need
    const [inputValues, setInputValues] = useState(Array(needs.length).fill(''));

    // Handle input change for each need item
    const handleInputChange = (index, value) => {
        const updatedInputs = [...inputValues];
        updatedInputs[index] = value;
        setInputValues(updatedInputs);
    };

    // Function to handle joining event and updating fulfilled count
    const handleJoinEvent = () => {
        const updatedList = updatedNeeds.map((need, index) => {
            const inputQuantity = parseInt(inputValues[index], 10) || 0;
            if (inputQuantity > 0) {
                return {
                    ...need,
                    fulfilled: need.fulfilled + inputQuantity,
                };
            }
            return need;
        });
        
        setUpdatedNeeds(updatedList); // Update the state with the new fulfilled counts

        // Call updateItemCount with item_id for each need that was updated
        updatedList.forEach((item) => {
            console.log("ITEM B4 COUNT", item.item_id, item); // Confirm item_id and updated need item details
            updateItemCount(item.item_id, item, event.id);
        });
        
        Alert.alert('You have joined the event!', 'You have added to the event needs.');
        navigation.goBack(); // Go back to the previous screen
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>Organized by: {event.host}</Text>

            <Text style={styles.sectionTitle}>Event Details</Text>
            <View style={styles.eventDetails}>
                <Text style={styles.eventText}>
                    <Text style={styles.bold}>Date: </Text>{event.date}
                </Text>
                <Text style={styles.eventText}>
                    <Text style={styles.bold}>Location: </Text>{event.location}
                </Text>
            </View>

            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Event Needs:</Text>
                {updatedNeeds.length > 0 ? (
                    updatedNeeds.map((need, index) => (
                        <View key={index} style={styles.needItem}>
                            <Text style={styles.needItemText}>
                                {need.fulfilled} / {need.total} {need.itemName}
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={`Add more ${need.itemName}`}
                                keyboardType="numeric"
                                value={inputValues[index]}
                                onChangeText={(text) => handleInputChange(index, text)}
                            />
                        </View>
                    ))
                ) : (
                    <Text>No needs listed for this event</Text>
                )}
            </View>

            <TouchableOpacity style={styles.joinButton} onPress={handleJoinEvent}>
                <Text style={styles.joinButtonText}>Join Event</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 10,
    },
    eventDetails: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    eventText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
        color: '#333',
    },
    needsContainer: {
        marginBottom: 20,
    },
    needsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    needItem: {
        marginBottom: 20,
    },
    needItemText: {
        fontSize: 16,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginTop: 8,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    joinButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default JoinEvent;
