// AddCommunityServiceScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const AddCommunityServiceScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [needs, setNeeds] = useState([{ item: '', fulfilled: 0, total: 0 }]);

    const handleAddNeed = () => {
        setNeeds([...needs, { item: '', fulfilled: 0, total: 0 }]);
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
        Alert.alert('Community Service Created', 'Your community service has been successfully created!');
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create Community Service</Text>

            <TextInput
                style={styles.input}
                placeholder="Community Service Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={[styles.input, styles.multiLineInput]}
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
                placeholder="Event Date (e.g. YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
            />

            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Event Needs</Text>
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
                                style={[styles.input, styles.quantityInput]}
                                placeholder="Total Quantity"
                                value={need.total.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'total', text)}
                            />
                            <TextInput
                                style={[styles.input, styles.quantityInput]}
                                placeholder="Fulfilled Quantity"
                                value={need.fulfilled.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => handleNeedChange(index, 'fulfilled', text)}
                            />
                        </View>
                    </View>
                ))}
                <TouchableOpacity style={styles.addNeedButton} onPress={handleAddNeed}>
                    <Text style={styles.addNeedButtonText}>+ Add Another Need</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f4f8f7',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 45,
        borderColor: '#d0d0d0',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 12,
        fontSize: 16,
    },
    multiLineInput: {
        height: 80,
        textAlignVertical: 'top',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    needsContainer: {
        marginTop: 20,
    },
    needsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    needItem: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    quantityInput: {
        flex: 1,
        marginHorizontal: 5,
    },
    addNeedButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    addNeedButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default AddCommunityServiceScreen;
