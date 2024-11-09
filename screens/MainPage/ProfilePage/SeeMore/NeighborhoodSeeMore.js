// NeighborhoodSeeMore.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NeighborhoodSeeMore = () => {

    const neighborhoodData = [
        { id: '1', name: 'Aayan Ramirez', phone: '0249-437 030', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, address: 'Street B, Nb 20' },
        { id: '2', name: 'Riley Wall', phone: '0722-457 706 ', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, address: 'Street A, Nb 19' },
        { id: '3', name: 'Ella Peters', phone: '0723-605 613 ', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, address: 'Street A, Nb 18' },
        { id: '4', name: 'Miles Lowe', phone: '0744-872 202', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, address: 'Street A, Nb 17' },
        { id: '5', name: 'Brithney Sraeps', phone: '0788-798 234', profilePhoto: { uri: 'https://www.w3schools.com/w3images/avatar2.png' }, address: 'Street C, Nb 2' },
    ];

    const AllMembersList = () => (
        <FlatList
            data={neighborhoodData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={item.profilePhoto} style={styles.profilePhoto} />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.member}>{item.address}</Text>
                        <Text style={styles.member}>{item.phone}</Text>
                    </View>
                </View>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.neighbourhoodName}>🏠GHIRODA</Text>
                    <Text style={styles.sectionTitle}>Members</Text>
                    <AllMembersList />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        padding: 20,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        alignItems: 'center',
    },
    profilePhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    neighbourhoodName: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    member: {
        fontSize: 15,
    },
});

export default NeighborhoodSeeMore;
