// JoinServiceScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const JoinService = ({ route, navigation }) => {
    const { service } = route.params; // Retrieve the service object passed from the previous screen

    const [updatedNeeds, setUpdatedNeeds] = useState(service.needs); // State to manage the updated needs

    const handleAddNeed = (index, newQuantity) => {
        const updatedList = [...updatedNeeds];
        updatedList[index].fulfilled += parseInt(newQuantity, 10); // Update the fulfilled needs
        setUpdatedNeeds(updatedList); // Update state with the new list
    };

    const handleJoinService = () => {
        // Here you would send the updated needs to your database or API
        Alert.alert('You have joined the service!', `You have added to the service needs.`);
        navigation.goBack(); // Go back to the previous screen after joining
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.subtitle}>Organized by: {service.organizer}</Text>

            <Text style={styles.sectionTitle}>Service Details</Text>
            <View style={styles.serviceDetails}>
                <Text style={styles.serviceText}>
                    <Text style={styles.bold}>Date: </Text>{service.date}
                </Text>
                <Text style={styles.serviceText}>
                    <Text style={styles.bold}>Location: </Text>{service.location}
                </Text>
            </View>

            <View style={styles.needsContainer}>
                <Text style={styles.needsTitle}>Service Needs:</Text>
                {updatedNeeds.map((need, index) => (
                    <View key={index} style={styles.needItem}>
                        <Text style={styles.needItemText}>
                            {need.fulfilled} / {need.total} {need.item}
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`Add more ${need.item}`}
                            keyboardType="numeric"
                            onChangeText={(text) => handleAddNeed(index, text)}
                        />
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.joinButton} onPress={handleJoinService}>
                <Text style={styles.joinButtonText}>Join Service</Text>
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
        color: '',
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
    serviceDetails: {
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
    serviceText: {
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

export default JoinService;
