import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, TextInput, Button } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const CoFundScreen = () => {
    const goalAmount = 1000; // Total goal amount (e.g., 1000 units of currency)
    const [currentAmount, setCurrentAmount] = useState(350); // Current amount raised (e.g., 350 units of currency)

    const [itemsData, setItemsData] = useState([
        { id: '1', name: 'Item 1', price: 200 },
        { id: '2', name: 'Item 2', price: 150 },
        { id: '3', name: 'Item 3', price: 300 },
        { id: '4', name: 'Item 4', price: 100 },
        { id: '5', name: 'Item 5', price: 250 },
    ]);

    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    // Calculate the progress as a fraction of the total goal amount
    const progress = currentAmount / goalAmount;

    const handleDonate = () => {
        const newAmount = currentAmount + 50; // Donation amount (e.g., 50 units)
        if (newAmount <= goalAmount) {
            setCurrentAmount(newAmount);
        } else {
            setCurrentAmount(goalAmount); // Ensure it doesn't exceed the goal
        }
        Alert.alert('Donation', `You donated 50 units!`);
    };

    const handleAddItem = () => {
        // Check if the input fields are not empty and price is a valid number
        if (newItemName.trim() === '' || isNaN(newItemPrice) || newItemPrice <= 0) {
            Alert.alert('Error', 'Please enter a valid name and price.');
            return;
        }

        const newItem = { id: (itemsData.length + 1).toString(), name: newItemName, price: parseFloat(newItemPrice) };
        setItemsData([...itemsData, newItem]);
        setModalVisible(false); // Close the modal after adding the item
        setNewItemName(''); // Reset input fields
        setNewItemPrice('');
        Alert.alert('Item Added', `You added ${newItem.name} with a price of ${newItem.price} units.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CoFund Project</Text>

            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>Goal: ${goalAmount}</Text>
                <Text style={styles.progressText}>Raised: ${currentAmount} of ${goalAmount}</Text>

                {/* Progress Bar */}
                <ProgressBar
                    progress={progress}
                    color="#4CAF50"
                    style={styles.progressBar}
                />
            </View>

            <Text style={styles.itemsHeader}>Items for Fundraising</Text>
            <FlatList
                data={itemsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                    </View>
                )}
            />

            {/* Buttons at the bottom of the page */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
                    <Text style={styles.donateButtonText}>Donate 50 units</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addItemButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addItemButtonText}>Add New Item</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for adding new item */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalHeader}>Add New Item</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Item Name"
                            value={newItemName}
                            onChangeText={setNewItemName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Enter Item Price"
                            value={newItemPrice}
                            onChangeText={setNewItemPrice}
                            keyboardType="numeric"
                        />

                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Add Item" onPress={handleAddItem} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f7',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    goalContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    goalText: {
        fontSize: 18,
        color: '#333',
    },
    progressText: {
        fontSize: 16,
        color: '#4CAF50',
        marginTop: 10,
    },
    progressBar: {
        width: '80%',
        marginTop: 10,
    },
    donateButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    donateButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    addItemButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    addItemButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemsHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemPrice: {
        fontSize: 16,
        color: '#777',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default CoFundScreen;
