import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NeighbourhoodPortal = () => {
    const navigation = useNavigation();

    const possessionsData = [
        { id: '1', name: 'Marie Curie', phone: '0249-437 030', profilePhoto: { uri: 'https://randomuser.me/api/portraits/women/1.jpg' }, item: 'Lawn Mower' },
        { id: '2', name: 'Charlie Puth', phone: '0722-457 706 ', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' }, item: 'Grill' },
        { id: '3', name: 'Bruno Mars', phone: '0723-605 613 ', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/2.jpg' }, item: 'Pressure Washer' },
        { id: '4', name: 'Sam White', phone: '0744-872 202', profilePhoto: { uri: 'https://randomuser.me/api/portraits/women/2.jpg' }, item: 'Drill' },
        { id: '5', name: 'Emma Watson', phone: '0356-457 123', profilePhoto: { uri: 'https://randomuser.me/api/portraits/women/3.jpg' }, item: 'Bicycle' },
        { id: '6', name: 'David Tennant', phone: '0754-765 432', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/3.jpg' }, item: 'Chainsaw' },
        { id: '7', name: 'Rachel Green', phone: '0324-907 624', profilePhoto: { uri: 'https://randomuser.me/api/portraits/women/4.jpg' }, item: 'Ladder' },
        { id: '8', name: 'Mark Ruffalo', phone: '0614-457 908', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/4.jpg' }, item: 'Snow Shovel' },
    ];

    const SharedItemsList = () => (
        <FlatList
            data={possessionsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={item.profilePhoto} style={styles.profilePhoto} />
                    <View style={styles.textContainer}>
                        <Text style={styles.itemName}>{item.item}</Text>
                        <Text style={styles.itemDescription}>Currently at: {item.name}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                    </View>
                </View>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.sectionTitle}>Neighbourhood Shared Items</Text>
                <SharedItemsList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 10,
        color: '#2C6B2F',
        marginBottom: 10,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        marginVertical: 12,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        alignItems: 'center',
    },
    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20,
        borderWidth: 2,
        borderColor: '#388E3C',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2C6B2F',
    },
    itemDescription: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    phone: {
        fontSize: 15,
        color: '#777',
    },
});

export default NeighbourhoodPortal;
