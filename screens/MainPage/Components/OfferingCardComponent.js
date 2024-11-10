// OfferingCardComponent.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AskCardComponent from '../Components/AskCardComponent';

const OfferingCardComponent = ({ navigation }) => {
    const asks = [
        {
            id: '1',
            title: 'Gardening Service',
            name: 'Alice Johnson',
            phone: '555-123-4567',
            description: 'Offering professional gardening services to help keep your plants healthy and beautiful.',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
        },
        {
            id: '2',
            title: 'Laptop for Sale',
            name: 'John Doe',
            phone: '123-456-7890',
            description: 'Selling a gently used laptop in excellent condition. Perfect for students or professionals.',
            profileImage: 'https://www.w3schools.com/w3images/avatar5.png',
        },
        {
            id: '3',
            title: 'Chairs Available',
            name: 'Jane Smith',
            phone: '987-654-3210',
            description: 'Set of 4 wooden chairs. Great for dining room or study.',
            profileImage: 'https://www.w3schools.com/w3images/avatar6.png',
        },
    ];
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Community Offers</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
                onPress={() => navigation.navigate('AddOfferScreen')}
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

export default OfferingCardComponent;