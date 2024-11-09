// AboutApp.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutApp = () => {
    const sections = [
        {
            id: '1',
            title: 'What is Our Community Sharing App?',
            description:
                'Our app connects community members, allowing them to share, borrow, and give away items they no longer need. By fostering a sharing culture, we help reduce waste and encourage sustainable living.',
        },
        {
            id: '2',
            title: 'How It Works',
            description:
                'Browse items shared by others in your community, post items you want to share, and easily manage your own shared items. Communicate directly with others to arrange pickups and drop-offs.',
        },
        {
            id: '3',
            title: 'Why Join?',
            description:
                'Joining the app helps you save money, reduce clutter, and contribute to a sustainable environment by giving new life to items that others might need.',
        },
        {
            id: '4',
            title: 'Community Guidelines',
            description:
                'We aim to create a safe, respectful environment. Please ensure all shared items are in usable condition, and communicate politely with other community members.',
        },
        {
            id: '5',
            title: 'Get Started',
            description:
                'Download the app, create an account, and start sharing today! Together, we can make a positive impact on our environment and community.',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <Text style={styles.mainTitle}>Neighbourly</Text>

                {sections.map((section) => (
                    <View key={section.id} style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <Text style={styles.sectionDescription}>{section.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollContainer: {
        padding: 7,
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 100,
        borderRadius: 20,
        marginBottom: 8,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    sectionDescription: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
    },
});

export default AboutApp;