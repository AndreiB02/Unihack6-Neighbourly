// AddEventScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const AddEventScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [needs, setNeeds] = useState([{ item: '', fulfilled: '', total: '' }]);

    const handleSubmit = () => {
        if (!title || !phone || !date || !location || needs.some(need => !need.item || !need.total)) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }

        Alert.alert('Event Created', 'Your event has been successfully created!');
        navigation.goBack();
    };

    const handleAddNeed = () => {
        setNeeds([...needs, { item: '', fulfilled: 0, total: 0 }]);
    };

    const handleNeedChange = (index, field, value) => {
        const updatedNeeds = [...needs];
        updatedNeeds[index][field] = value;
        setNeeds(updatedNeeds);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Create a New Event</Text>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Event Information</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Event Title "
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
                    placeholder="Phone Number "
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

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Event Needs</Text>
                {needs.map((need, index) => (
                    <View key={index} style={styles.needItem}>
                        <TextInput
                            style={styles.input}
                            placeholder="Item (e.g., Chairs)"
                            value={need.item}
                            onChangeText={(text) => handleNeedChange(index, 'item', text)}
                        />
                        <View style={styles.row}>
                            <TextInput
                                style={[styles.input, styles.halfInput]}
                                placeholder="Total Quantity"
                                value={need.total.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'total', text)}
                            />
                            <TextInput
                                style={[styles.input, styles.halfInput]}
                                placeholder="Fulfilled Quantity"
                                value={need.fulfilled.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'fulfilled', text)}
                            />
                        </View>
                    </View>
                ))}
                <TouchableOpacity style={styles.addNeedButton} onPress={handleAddNeed}>
                    <Text style={styles.addNeedButtonText}>+ Add Additional Need</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Create Event</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
   header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15,
        textAlign: 'center',    
    },
    sectionContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4CAF50',
        marginBottom: 15,
    },
    input: {
        height: 48,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 6,
        fontSize: 15,
        backgroundColor: '#F9F9F9',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        flex: 0.48,
    },
    needItem: {
        marginBottom: 15,
    },
    addNeedButton: {
        backgroundColor: '#2E7D32',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 5,
    },
    addNeedButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default AddEventScreen;
