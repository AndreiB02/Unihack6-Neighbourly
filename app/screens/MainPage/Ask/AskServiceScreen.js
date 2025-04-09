// AskServiceScreen.js
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AskCardComponent from '../Components/AskCardComponent';
import MYAskCardComponent from '../Components/MYAskCardComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchMyProblems } from '../../../services/problems';
import { useFocusEffect } from '@react-navigation/native';

const AskServiceScreen = ({ navigation, route }) => {
    const problems = route.params?.data;
    const user_id = route.params?.user_id;

    const [myProblems,setMyProblems] = useState([]);
    
    useFocusEffect(
            useCallback(() => {
              fetch_MyProblems(user_id);
            }, [user_id])
    );

    const fetch_MyProblems = async () => {
            try {
                const response = await fetchMyProblems(user_id);
                if (response.length > 0) {
                    setMyProblems(response);
                }
            } catch (error) {
                console.error('Error fetching neighbourhood', error);
                Alert.alert('Error', 'Something went wrong.');
            }
    };

    console.log(myProblems);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Requests</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {myProblems.map((ask) => (
                    <MYAskCardComponent
                        key={ask.id}
                        host={ask.host}
                        name={ask.name}
                        contact={ask.contact}
                        description={ask.description}
                        profileImage={ask.profileImage}
                        onModify={() => console.log(`Modify ${ask.id}`)}
                        onDelete={() => console.log(`Delete ${ask.id}`)}
                        onPause={() => console.log(`Pause ${ask.id}`)}
                    />
                ))}

                <Text style={styles.header}>Community Requests</Text>
                {problems.map((ask) => (
                    <AskCardComponent
                        key={ask.id}
                        name={ask.name}
                        host={ask.host}
                        contact={ask.contact}
                        description={ask.description}
                        profileImage={ask.profileImage}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddAskScreen', {user_id:user_id})}
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
