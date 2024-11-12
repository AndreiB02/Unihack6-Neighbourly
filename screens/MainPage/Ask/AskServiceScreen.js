// AskServiceScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AskCardComponent from '../Components/AskCardComponent';
import MYAskCardComponent from '../Components/MYAskCardComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const AskServiceScreen = ({ navigation }) => {
    const asks = [
        {
            id: '1',
            title: 'Need a Plumber',
            name: 'John Doe',
            phone: '123-456-7890',
            description: 'Looking for a plumber to fix a leaking pipe.',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
        },
        {
            id: '2',
            title: 'Carpenter Needed',
            name: 'Jane Smith',
            phone: '987-654-3210',
            description: 'I need help assembling some furniture.',
            profileImage: 'https://www.w3schools.com/w3images/avatar5.png',
        },
    ];

    const myAsks = [
        {
            id: '3',
            title: 'Need Flour for Cake',
            name: 'Marie Small',
            phone: '934-241-6756',
            description: 'I need help with the cake I am making.',
            profileImage: 'https://www.w3schools.com/w3images/avatar6.png',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Requests</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {myAsks.map((ask) => (
                    <MYAskCardComponent
                        key={ask.id}
                        title={ask.title}
                        name={ask.name}
                        phone={ask.phone}
                        description={ask.description}
                        profileImage={ask.profileImage}
                        onModify={() => console.log(`Modify ${ask.id}`)}
                        onDelete={() => console.log(`Delete ${ask.id}`)}
                        onPause={() => console.log(`Pause ${ask.id}`)}
                    />
                ))}

                <Text style={styles.header}>Community Requests</Text>
                {asks.map((ask) => (
                    <AskCardComponent
                        key={ask.id}
                        title={ask.title}
                        name={ask.name}
                        phone={ask.phone}
                        description={ask.description}
                        profileImage={ask.profileImage}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddAskScreen')}
            >
                <Icon name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f4f7f9',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2E7D32',
        textAlign: 'center',
        marginVertical: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    scrollViewContent: {
        paddingBottom: 100,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#4CAF50',
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
});

export default AskServiceScreen;
