// AddAskScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { createProblem } from '../../../services/problems';

const AddAskScreen = ({ navigation, route }) => {
    const {user_id}=route.params;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async () => {
        if (!name || !contact) {
            Alert.alert("Error", "Title and contact information are required.");
            return;
        }

        const newProblem = {
            name,
            description,
            contact,
            user_id,
        };
        console.log("Submitted Ask:", newProblem);

        const response = await createProblem(newProblem,user_id);
        Alert.alert("New service request created!");
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create a New Request</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E.g. Need a carpenter"
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    placeholder="Description (optional)"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Contact information</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your contact information"
                    value={contact}
                    onChangeText={setContact}
                />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit Request</Text>
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
    inputContainer: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
    },
    label: {
        fontSize: 17,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#FAFAFA',
    },
    descriptionInput: {
        height: 90,
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default AddAskScreen;
