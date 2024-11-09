import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CommunityCardComponent = ({ service }) => {
    const handleJoinService = () => {
        console.log('Joined service:', service.title);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.subtitle}>Organized by: {service.organizer}</Text>
            <Text style={styles.text}>{service.description}</Text>
            <Text style={styles.text}>Location: {service.location}</Text>
            <Text style={styles.text}>Date: {service.date}</Text>

            <View style={styles.needsContainer}>
                {service.needs.map((need, index) => {
                    const progress = (need.fulfilled / need.total) * 100;
                    return (
                        <View key={index} style={styles.needItem}>
                            <Text style={styles.needItemText}>
                                {need.fulfilled} / {need.total} {need.item}
                            </Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={{
                                        ...styles.progressBarFiller,
                                        width: `${progress}%`,
                                    }}
                                />
                            </View>
                        </View>
                    );
                })}
            </View>

            <TouchableOpacity style={styles.joinButton} onPress={handleJoinService}>
                <Text style={styles.joinButtonText}>Join Service</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: '#555',
    },
    needsContainer: {
        marginTop: 15,
    },
    needItem: {
        marginBottom: 10,
    },
    needItemText: {
        fontSize: 14,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBarFiller: {
        height: '100%',
        backgroundColor: '#4CAF50',
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CommunityCardComponent;
