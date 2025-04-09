import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OfferingCardComponent from '../../screens/MainPage/Components/OfferingCardComponent';
import MYOfferingCardComponent from '../../screens/MainPage/Components/MYOfferingCardComponent';
import { fetchMyService, fetchService } from '../../services/services';
import { useFocusEffect } from '@react-navigation/native';

const OfferServiceScreen = ({ navigation, route }) => {
    const services = route.params?.data;
    const user_id = route.params?.user_id;
    const [myServices, setMyServices] = useState([]);

    // Sample hardcoded offers for MYOfferingCardComponent
    // const myOffers = [
    //     {
    //         id: 1,
    //         title: "Plumbing Services",
    //         description: "Experienced plumber offering quick and reliable services.",
    //         phone: "123-456-7890",
    //         author: "John Doe",
    //     },
    //     {
    //         id: 2,
    //         title: "House Cleaning",
    //         description: "Thorough and affordable cleaning services for your home.",
    //         phone: "987-654-3210",
    //         author: "Jane Smith",
    //     },
    // ];

    useFocusEffect(
        useCallback(() => {
          fetch_MyServices(user_id);
        }, [user_id])
      );
    
        const fetch_MyServices = async () => {
                try {
                    const response = await fetchMyService(user_id);
                    if (response.length > 0) {
                        setMyServices(response);
                    }
                } catch (error) {
                    console.error('Error fetching neighbourhood', error);
                    Alert.alert('Error', 'Something went wrong.');
                }
        };
        console.log(services);
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.header}>Your Offers</Text>
                    {myServices.map((offer) => (
                        <MYOfferingCardComponent
                            key={offer.id}
                            host={offer.host}
                            name={offer.name}
                            contact={offer.contact}
                            description={offer.description}
                            profileImage={offer.profileImage}
                            onModify={() => console.log(`Modify ${offer.id}`)}
                            onDelete={() => console.log(`Delete ${offer.id}`)}
                            onPause={() => console.log(`Pause ${offer.id}`)}
                        />
                    ))}
    
                    <Text style={styles.header}>Community Offers</Text>
                    {services.map((offer) => (
                        <OfferingCardComponent
                            key={offer.id}
                            name={offer.name}
                            host={offer.host}
                            contact={offer.contact}
                            description={offer.description}
                            profileImage={offer.profileImage}
                        />
                    ))}
                </ScrollView>
    
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddOfferScreen', {user_id:user_id})}
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
    
    export default OfferServiceScreen;