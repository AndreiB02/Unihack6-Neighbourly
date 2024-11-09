import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const zone = "DUMBRAVITA";
const logo = require('../../assets/logo.png');

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Fixed Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon
                        name="person-circle-outline"
                        size={40}
                        color="#4CAF50"
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.neighborhoodTitle}>{zone}</Text>
                    <Text style={styles.subHeader}>Neighborhood</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* CoFunds Section */}
                <CoFunds navigation={navigation} />

                {/* Scrollable Sections */}
                <Sections navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

const Sections = ({ navigation }) => (
    <View style={styles.sectionsContainer}>
        <Section title="Offer Service" screenName="OfferServiceScreen" navigation={navigation} />
        <Section title="Ask for Service" screenName="AskServiceScreen" navigation={navigation} />
        <Section title="Events" screenName="EventServiceScreen" navigation={navigation} />
        <Section title="Volunteers Needed" screenName="ComunityServiceScreen" navigation={navigation} />
    </View>
);

const Section = ({ title, screenName, navigation }) => (
    <>
        <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.sectionTouchable}>
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeader}>{title}</Text>
                <Icon name="chevron-forward-outline" size={24} color="#4CAF50" style={styles.arrowIcon} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
            <MiniCard label="Looking for a babysitter" author="-Karina Barbul" />
            <MiniCard label="Available for pet-sitting" author="-John Doe" />
            <MiniCard label="Offering lawn care services" author="-Mike Lee" />
        </ScrollView>
    </>
);

const MiniCard = ({ label, author }) => (
    <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{label}</Text>
            <Text style={styles.cardAuthor}>{author}</Text>
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
            onPress={() => navigation.navigate('CoFundScreen')}
        >
            <Text style={styles.coFundsButtonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop:35,
        flex: 1,
        backgroundColor: '#F3F7F6',
    },
    scrollContainer: {
        paddingTop: 100, // Adjusted to leave space for the fixed header
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 3,
        zIndex: 1000, // Ensure header stays on top
    },
    neighborhoodTitle: {
        fontWeight: '600',
        fontSize: 22,
        color: '#2E7D32',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 14,
        color: '#A5D6A7',
        fontWeight: '400',
    },
    headerCenter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileIcon: {
        marginRight: 10,
    },
    logo: {
        width: 70,
        height: 40,
    },
    sectionsContainer: {
        paddingVertical: 10,
    },
    sectionTouchable: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#F3F7F6',
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    arrowIcon: {
        marginLeft: 5,
    },
    cardContainer: {
        paddingLeft: 15,
    },
    card: {
        width: 150,
        height: 100,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 6,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
        borderColor: '#E0E0E0',
        borderWidth: 0.5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 3,
    },
    cardAuthor: {
        fontSize: 12,
        color: '#757575',
    },
    coFundsContainer: {
        padding: 20,
        backgroundColor: '#E8F5E9',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    coFundsHeader: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 10,
    },
    coFundsText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 15,
    },
    coFundsButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        elevation: 3,
    },
    coFundsButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default HomeScreen;
