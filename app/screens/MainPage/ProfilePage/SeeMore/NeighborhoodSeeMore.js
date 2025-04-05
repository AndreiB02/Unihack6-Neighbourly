import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, Dimensions } from 'react-native';

const NeighborhoodSeeMore = ({route}) => {
    const members = route.params?.members;
    const neighbourhoodName = route.params?.neighbourhoodName;
    const profileImage = route.param?.profileImage;
    console.log(members);


    /*const neighborhoodData = [
        { id: '1', name: 'Aayan Ramirez', phone: '0249-437 030', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/1.jpg' }, address: 'Street B, Nb 20' },
        { id: '2', name: 'Riley Wall', phone: '0722-457 706', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/7.jpg' }, address: 'Street A, Nb 19' },
        { id: '3', name: 'Ella Peters', phone: '0723-605 613', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/3.jpg' }, address: 'Street A, Nb 18' },
        { id: '4', name: 'Miles Lowe', phone: '0744-872 202', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/5.jpg' }, address: 'Street A, Nb 17' },
        { id: '5', name: 'Brithney Sraeps', phone: '0788-798 234', profilePhoto: { uri: 'https://randomuser.me/api/portraits/men/4.jpg' }, address: 'Street C, Nb 2' },
    ];*/

    //change profile image
    const renderMemberCard = ({ item }) => (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image source={{uri: item.profileImage ? item.profileImage: 'https://pbs.twimg.com/media/EEUy6MCU0AErfve.png'}} style={styles.profilePhoto} /> 
                <View style={styles.cardContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.address}>{item.points}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>🏠 Neighborhood: {neighbourhoodName}</Text>
            <FlatList
                data={members}
                renderItem={renderMemberCard}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2; // Adjusted for proper alignment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9faff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34495e',
        textAlign: 'center',
        marginBottom: 20,
    },
    listContainer: {
        paddingHorizontal: 5,
        paddingBottom: 20,
    },
    cardContainer: {
        width: cardWidth,
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#2c3e50',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    card: {
        padding: 15,
        alignItems: 'center',
    },
    profilePhoto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    cardContent: {
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        color: '#bdc3c7',
        textAlign: 'center',
        marginBottom: 5,
    },
    phone: {
        fontSize: 14,
        color: '#559fed',
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default NeighborhoodSeeMore;
