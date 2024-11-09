import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, TextInput, Modal, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';  // Make sure you have installed this icon library

const PossessionsSeeMore = () => {
    const [possessions, setPossessions] = useState([
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
        { id: '6', item: 'Hammer', quantity: 3 },
        { id: '7', item: 'Pencils', quantity: 10 },
        { id: '8', item: 'Monitor', quantity: 2 },
        { id: '9', item: 'Notebooks', quantity: 12 },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');

    const addPossession = () => {
        if (newItemName.trim() === '' || newItemQuantity.trim() === '') {
            Alert.alert('Error', 'Please fill in both fields!');
            return;
        }
        // Add the new possession to the state
        const newPossession = {
            id: (possessions.length + 1).toString(),
            item: newItemName,
            quantity: parseInt(newItemQuantity),
        };
        setPossessions((prevPossessions) => [...prevPossessions, newPossession]);
        // Reset form fields and close the modal
        setNewItemName('');
        setNewItemQuantity('');
        setModalVisible(false);
    };

    const AllPossessionsList = () => (
        <FlatList
            data={possessions}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}  // This ensures the items are displayed in two columns
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemName}>{item.item}</Text>
                        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                    </View>
                </View>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.possessionTitle}>🛠️ Possessions</Text>
                <Text style={styles.sectionTitle}>Your Items</Text>
                <AllPossessionsList />
            </ScrollView>

            {/* Floating action button */}
            <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
                <Icon name="add" size={40} color="#fff" />
            </TouchableOpacity>

            {/* Modal for adding a possession */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Add New Possession</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Item Name"
                            value={newItemName}
                            onChangeText={setNewItemName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantity"
                            keyboardType="numeric"
                            value={newItemQuantity}
                            onChangeText={setNewItemQuantity}
                        />
                        <View style={styles.modalButtonContainer}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#388e3c" />
                            <Button title="Add" onPress={addPossession} color="#388e3c" />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Keeping the background color white
        padding: 20,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    possessionTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#555',
        marginTop: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
    card: {
        flex: 1,
        padding: 15,
        marginVertical: 8,
        marginRight: 10,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    itemQuantity: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#388e3c',  // Green color for the floating button
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#388e3c',  // Green text for modal title
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#388e3c',  // Green border for inputs
        borderRadius: 5,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default PossessionsSeeMore;
