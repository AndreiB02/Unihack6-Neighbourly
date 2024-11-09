import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const zone = "DUMBRAVITA";
const logo = require('../../assets/logo.png');

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        
        <ScrollView style={styles.container}>
            {/* Fixed Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon
                        name="person-circle-outline"
                        size={40}
                        color="black"
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
                <View style={{ flexWrap: 'wrap', flexDirection: 'column' }}>
                    <Text style={styles.neighborhoodTitle}>{zone} </Text>
                    <Text>Neighbourhood</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AboutApp')} >
                    <Image
                        source={logo}
                        style={{ width: 70, height: 40 }} />
                </TouchableOpacity>
            </View>
            

            {/* CoFunds Section */}
            <CoFunds navigation={navigation} />

            {/* Scrollable Sections */}
            <Sections navigation={navigation} />
        </ScrollView>
        
    );
};

const Sections = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1 }}>
        <Section title="Offer Service" screenName="OfferServiceScreen" navigation={navigation} />
        <Section title="Ask for Service" screenName="AskServiceScreen" navigation={navigation} />
        <Section title="Events" screenName="EventServiceScreen" navigation={navigation} />
        <Section title="Volunteers Needed" screenName="ComunityServiceScreen" navigation={navigation} />
    </SafeAreaView>
);

const Section = ({ title, screenName, navigation }) => (
    <>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.sectionHeader}>{title}</Text>
            <TouchableOpacity
                style={{ alignItems: 'flex-end', flex: 1 }}
                onPress={() => navigation.navigate(screenName)}
            >
                <Text style={{ padding: 10, fontSize: 15 }}>See more</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
            <MiniCard label="Looking for a babysitter" author="-Karina Barbul" />
            <MiniCard label="Looking for a babysitter" author="-Karina Barbul" />
            <MiniCard label="Looking for a babysitter" author="-Karina Barbul" />
            <MiniCard label="Looking for a babysitter" author="-Karina Barbul" />
        </ScrollView>
    </>
);

const MiniCard = ({ label, author }) => (
    <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.card}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{label}</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>{author}</Text>
        </View>
    </TouchableOpacity>
);

const CoFunds = ({ navigation }) => (
    <View style={styles.coFundsContainer}>
        <Text style={styles.coFundsHeader}>CoFunds</Text>
        <Text style={styles.coFundsText}>
            Join our community funding initiatives to make a difference!
        </Text>
        <TouchableOpacity
            style={styles.coFundsButton}
            onPress={() => navigation.navigate('CoFundsScreen')} // Navigate to CoFundsScreen
        >
            <Text style={styles.coFundsButtonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    neighborhoodTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: 'darkolivegreen',
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileIcon: {
        marginRight: 10,
    },
    sectionHeader: {
        padding: 15,
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 1,
        color: 'darkolivegreen',
    },
    card: {
        width: 150,
        height: 100,
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    coFundsContainer: {
        padding: 20,
        backgroundColor: '#dfe7ec',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    coFundsHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 10,
    },
    coFundsText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    coFundsButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    coFundsButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
