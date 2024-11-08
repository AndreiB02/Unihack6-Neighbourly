// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Neighbourhood</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon
                        name="person-circle-outline" // Profile icon
                        size={40} // Icon size
                        color="black"
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50, // Adjust padding as needed
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 32, // Increased font size for the title
        fontWeight: 'bold',
    },
    profileIcon: {
        marginRight: 10,
    },
});

export default HomeScreen;
