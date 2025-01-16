import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutApp = () => {
    const sections = [
        {
            id: '1',
            title: 'What is Neighbourly?',
            description:
                '   Neighbourly is an app designed to bring people in your community together by sharing resources and offering services. Instead of owning items you rarely use, like lawnmowers or grills, share them with others to save money and reduce waste. Beyond sharing items, the app features a "Volunteers Needed" section, where members can report neighborhood issues, and others can volunteer to help resolve them. It’s about building a sustainable, responsible community.',
        },
        {
            id: '2',
            title: 'How It Works',
            description:
                '   Browse and share items, post what you need, and arrange exchanges directly with your neighbors. It’s simple, fast, and easy to get involved.',
        },
        {
            id: '3',
            title: 'Why Join?',
            description:
                '   Save money, reduce clutter, and contribute to a greener environment by sharing items and services that others might need.',
        },
        {
            id: '4',
            title: 'Community Guidelines',
            description:
                '   We encourage a safe and respectful environment. Please ensure all shared items are in good condition, and communicate politely with fellow members.',
        },
        {
            id: '5',
            title: 'Get Started',
            description:
                '   Download the app, create an account, and start sharing today. Together, we can build a stronger, more sustainable community.',
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
        padding: 15,
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2451e3',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '100%',
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: '#559fed',
        marginBottom: 8,
    },
    sectionDescription: {
        fontSize: 17,
        color: 'black',
        lineHeight: 22,
    },
});

export default AboutApp;
