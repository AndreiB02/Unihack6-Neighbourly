import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OfferingCardComponent from '../../screens/MainPage/Components/OfferingCardComponent';
import MYOfferingCardComponent from '../../screens/MainPage/Components/MYOfferingCardComponent';
import { fetchService } from '../../services/services';
import { useFocusEffect } from '@react-navigation/native';

const OfferServiceScreen = ({ navigation }) => {
    const [offers, setOffers] = useState([]);

    // Sample hardcoded offers for MYOfferingCardComponent
    const myOffers = [
        {
            id: 1,
            title: "Plumbing Services",
            description: "Experienced plumber offering quick and reliable services.",
            phone: "123-456-7890",
            author: "John Doe",
        },
        {
            id: 2,
            title: "House Cleaning",
            description: "Thorough and affordable cleaning services for your home.",
            phone: "987-654-3210",
            author: "Jane Smith",
        },
    ];

    // Use useFocusEffect to fetch data when the screen is focused
    useFocusEffect(
        useCallback(() => {
            console.log("OfferServiceScreen focused");

            const fetchOffers = async () => {
                try {
                    const fetchedOffers = await fetchService();
                    const filteredOffers = fetchedOffers.filter(offer => offer.is_offered);
                    setOffers(filteredOffers);
                } catch (error) {
                    console.error("Error fetching offers:", error);
                }
            };

            fetchOffers();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.HeaderTitle}>Offering Services</Text>

            <ScrollView contentContainerStyle={styles.offersContainer}>
                {/* New custom MYOfferingCardComponent cards */}
                {myOffers.map((offer, index) => (
                    <MYOfferingCardComponent
                        key={`my-${index}`}
                        title={offer.title}
                        description={offer.description}
                        phone={offer.phone}
                        author={offer.author}
                    />
                ))}

                {/* Original OfferingCardComponent cards */}
                {offers.map((offer, index) => (
                    <OfferingCardComponent
                        key={index}
                        title={offer.name}
                        description={offer.description}
                        phone={offer.phone}
                        author={offer.author}
                        id={offer.id}
                    />
                ))}
            </ScrollView>

            {/* Add Button */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddOfferScreen')}
            >
                <Icon name="add-circle" size={80} color="#4CAF50" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    HeaderTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#388E3C',
        padding: 17,
    },
    offersContainer: {
        padding: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default OfferServiceScreen;
