import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
    const navigation = useNavigation();

    // Using useState to manage the input values
    const [name, setName] = useState('John Doe');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('john.doe@example.com');
    const [address, setAddress] = useState('123 Main St, Springfield');
    const [phone, setPhone] = useState('+1 234 567 890');

    const handleSave = () => {
        // Handle save logic (e.g., update profile in database)
        alert('Profile saved successfully!');
        navigation.goBack(); // Go back to Profile screen after saving
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Gender:</Text>
                <TextInput
                    style={styles.input}
                    value={gender}
                    onChangeText={setGender}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Home Address:</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c2271f',
        marginBottom: 20,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#f72f25',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    saveButton: {
        backgroundColor: '#d14943',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default EditProfileScreen;
