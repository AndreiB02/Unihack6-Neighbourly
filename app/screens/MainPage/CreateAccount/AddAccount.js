// AddAccount.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { createMember } from '../../../services/login';

const AddAccount = ({ navigation }) => {
    const [name, setName] = useState('');
    const [communityCode, setCommunityCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async () => {
        console.log(name, email, password);
        
        if (!name || !email || !password) {
            setErrorMessage('Please enter username, password, and email.');
            return;
        }
    
        try {
            const response = await createMember(name, email, password);
            console.log("response from createMember:", response);
            
            if (response?.id) { // Ensure response has an ID (valid account creation)
                Alert.alert('Account Created', 'Your account has been created successfully!');
                navigation.goBack(); // Move navigation outside the alert
            } else {
                Alert.alert('Error', 'Failed to create account.');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };
    
    

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Text style={styles.title}>Create Account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#aaa"
                    value={name}
                    onChangeText={setName}
                />
                {/* <TextInput
                    style={styles.input}
                    placeholder="Community Code"
                    placeholderTextColor="#aaa"
                    value={communityCode}
                    onChangeText={setCommunityCode}
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
                    <Text style={styles.createAccountButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        padding: 20,
    },
    formWrapper: {
        width: '80%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 16,
    },
    createAccountButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    createAccountButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default AddAccount;
