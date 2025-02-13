// LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '' && password === '') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Please log in to your account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaa"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AddAccount')} style={styles.addAccountButton}>
                    <Text style={styles.addAccountText}>Create an Account</Text>
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
        width: '80%',                  // Adjust the width to control the form size
        alignItems: 'center',           // Center items inside formWrapper horizontally
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
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
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
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    addAccountButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    addAccountText: {
        color: '#2E7D32',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LoginPage;
