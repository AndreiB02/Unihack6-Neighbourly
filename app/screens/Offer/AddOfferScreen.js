// AddOfferScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createService } from '../../services/services';

const AddOfferScreen = ({ navigation, route }) => {
    const {user_id}=route.params;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    //const [author, setAuthor] = useState('');

    const handleSubmit = async ()  => {
        if (!name || !contact) {
            Alert.alert("Error", "Title and contact information are required.");
            return;
        }

        // Replace this with actual database logic, e.g., Firebase or API call
        const newOffer = {
            name,
            description,
            contact,
            user_id,
        };
        console.log("Submitted Offer:", newOffer);

        const response = await createService(newOffer,user_id);

        Alert.alert("Offer created!", "Offer created!");
        // Navigate back to OfferServiceScreen or wherever you want after submission
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add a New Offer</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Offer title"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Brief Description</Text>
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
                    placeholder="Your contact information"
                    value={contact}
                    onChangeText={setContact}
                />
            </View>

            {/* <View style={styles.inputContainer}>
                <Text style={styles.label}>Author</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                />
            </View> */}

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit Offer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9fbfc',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddOfferScreen;
