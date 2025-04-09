// AskCardComponent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AskCardComponent = ({ id, name, profileImage, contact, description, host}) => {
    return (
        <View style={styles.cardContainer}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image source={{ uri: profileImage ? profileImage: `https://pbs.twimg.com/media/EEUy6MCU0AErfve.png` }} style={styles.profileImage} />
                <View style={styles.profileDetails}>
                    <Text style={styles.cardTitle}>{name}</Text>
                    <Text style={styles.cardName}>{host}</Text>
                </View>
            </View>

            {/* Contact and Description */}
            <View style={styles.content}>
                <View style={styles.contactSection}>
                    <Icon name="call" size={18} color="#4CAF50" />
                    <Text style={styles.contactText}>{contact}</Text>
                </View>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    profileDetails: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    cardName: {
        fontSize: 18,
        color: '#666',
    },
    content: {
        marginTop: 5,
    },
    contactSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactText: {
        fontSize: 17,
        color: '#333',
        marginLeft: 5,
    },
    description: {
        fontSize: 17,
        color: '#333',
    },
});

export default AskCardComponent;
