import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const AddEventScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [needs, setNeeds] = useState([{ item: '', fulfilled: '', total: '' }]); // Initialize with one need

    const handleSubmit = () => {
        if (!title || !phone || !date || !location || needs.some(need => !need.item || !need.total)) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        // Handle event submission to the database or API here
        // For now, just navigate back
        Alert.alert('Event Created', 'Your event has been successfully created!');
        navigation.goBack();
    };

    const handleAddNeed = () => {
        setNeeds([...needs, { item: '', fulfilled: 0, total: 0 }]); // Add a new need row
    };

    const handleNeedChange = (index, field, value) => {
        const updatedNeeds = [...needs];
        updatedNeeds[index][field] = value;
        setNeeds(updatedNeeds);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Create Event</Text>

            {/* Event Info Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Event Information</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Event Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description (optional)"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Event Date"
                    value={date}
                    onChangeText={setDate}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>

            {/* Needs Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Event Needs</Text>
                {needs.map((need, index) => (
                    <View key={index} style={styles.needItem}>
                        <TextInput
                            style={styles.input}
                            placeholder="Item (e.g. Chairs)"
                            value={need.item}
                            onChangeText={(text) => handleNeedChange(index, 'item', text)}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Total Quantity"
                                value={need.total.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'total', text)}
                            />
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Fulfilled Quantity"
                                value={need.fulfilled.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'fulfilled', text)}
                            />
                        </View>
                    </View>
                ))}
                <TouchableOpacity style={styles.addNeedButton} onPress={handleAddNeed}>
                    <Text style={styles.addNeedButtonText}>+ Add Need</Text>
                </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    sectionContainer: {
        marginBottom: 25,
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    needItem: {
        marginBottom: 15,
    },
    addNeedButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    addNeedButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AddEventScreen;
