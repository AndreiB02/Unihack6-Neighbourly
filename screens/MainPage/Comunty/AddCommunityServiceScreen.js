import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const AddCommunityServiceScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [needs, setNeeds] = useState([{ item: '', fulfilled: 0, total: 0 }]); // Initialize with one need

    const handleAddNeed = () => {
        setNeeds([...needs, { item: '', fulfilled: 0, total: 0 }]); // Add a new need row
    };

    const handleNeedChange = (index, field, value) => {
        const updatedNeeds = [...needs];
        updatedNeeds[index][field] = value;
        setNeeds(updatedNeeds);
    };

    const handleSubmit = () => {
        if (!title || !phone || !date || !location || needs.some(need => !need.item || !need.total)) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        // Handle submission to the database
        // For now, just navigate back
        Alert.alert('Community Service Created', 'Your community service has been successfully created!');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create Community Service</Text>

            {/* Community Service Information */}
            <TextInput
                style={styles.input}
                placeholder="Community Service Title"
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

            {/* Event Needs */}
            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Needs:</Text>
                {needs.map((need, index) => (
                    <View key={index} style={styles.needItem}>
                        <TextInput
                            style={styles.input}
                            placeholder="Item (e.g. Trash Bags)"
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    needsContainer: {
        marginTop: 20,
    },
    needsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
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

export default AddCommunityServiceScreen;
