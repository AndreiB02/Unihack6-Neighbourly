import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, TextInput, Button, Image } from 'react-native';
import ProgressBar from '../MainPage/Components/ProgressBar';

const CoFundScreen = () => {
    const goalAmount = 1000;
    const [currentAmount, setCurrentAmount] = useState(350);

    const [itemsData, setItemsData] = useState([
        { id: '1', name: 'Lawnmower', price: 200, raised: 50, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: '2', name: 'Dining Table', price: 150, raised: 75, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: '3', name: 'Cordless Drill', price: 300, raised: 120, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: '4', name: 'Office Chair', price: 100, raised: 45, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: '5', name: 'Electric Heater', price: 250, raised: 55, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [donationAmount, setDonationAmount] = useState('');

    const calculateItemProgress = (item) => item.raised / item.price;

    const calculateAverageProgress = () => {
        const totalProgress = itemsData.reduce((acc, item) => acc + calculateItemProgress(item), 0);
        return totalProgress / itemsData.length;
    };

    const handleDonateToItem = (itemId) => {
        const donation = parseFloat(donationAmount);
        if (isNaN(donation) || donation <= 0) {
            Alert.alert('Error', 'Please enter a valid donation amount.');
            return;
        }

        const updatedItems = itemsData.map(item =>
            item.id === itemId ? { ...item, raised: item.raised + donation } : item
        );
        setItemsData(updatedItems);
        setDonationAmount('');
        Alert.alert('Donation', `You donated ${donation} units to ${itemsData.find(item => item.id === itemId).name}!`);
    };

    const handleAddItem = () => {
        if (newItemName.trim() === '' || isNaN(newItemPrice) || newItemPrice <= 0) {
            Alert.alert('Error', 'Please enter a valid name and price.');
            return;
        }

        const newItem = { id: (itemsData.length + 1).toString(), name: newItemName, price: parseFloat(newItemPrice), raised: 0, avatar: 'https://randomuser.me/api/portraits/men/6.jpg' };
        setItemsData([...itemsData, newItem]);
        setModalVisible(false);
        setNewItemName('');
        setNewItemPrice('');
        Alert.alert('Item Added', `You added ${newItem.name} with a price of ${newItem.price} units.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CoFund Project</Text>

            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>Goal: ${goalAmount}</Text>
                <Text style={styles.progressText}>Raised: ${currentAmount} of ${goalAmount}</Text>

                <ProgressBar
                    progress={calculateAverageProgress()}
                    color={calculateAverageProgress() === 1 ? "#00C853" : "#4CAF50"}
                    style={styles.progressBar}
                />
                {calculateAverageProgress() === 1 && (
                    <Text style={styles.goalAchievedText}>Goal Achieved! 🎉</Text>
                )}
            </View>

            <Text style={styles.itemsHeader}>Items for Fundraising</Text>
            <FlatList
                data={itemsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.itemHeader}>
                            <Image source={{ uri: item.avatar }} style={styles.itemAvatar} />
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                        <Text style={styles.itemPrice}>{item.raised}$ / {item.price}$</Text>

                        <ProgressBar
                            progress={calculateItemProgress(item)}
                            color={calculateItemProgress(item) === 1 ? "#00C853" : "#4CAF50"}
                            style={styles.progressBar}
                        />

                        <View style={styles.donateContainer}>
                            <TextInput
                                style={styles.donationInput}
                                placeholder="Enter amount"
                                value={donationAmount}
                                onChangeText={setDonationAmount}
                                keyboardType="numeric"
                            />
                            <TouchableOpacity
                                style={styles.donateButton}
                                onPress={() => handleDonateToItem(item.id)}
                            >
                                <Text style={styles.donateButtonText}>Donate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addItemButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addItemButtonText}>Add New Item</Text>
            </TouchableOpacity>

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
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 20,
        textAlign: 'center',
    },
    goalContainer: {
        marginBottom: 30,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
    },
    goalText: {
        fontSize: 20,
        color: '#333',
    },
    progressText: {
        fontSize: 18,
        color: '#4CAF50',
        marginTop: 10,
    },
    progressBar: {
        width: '100%',
        marginTop: 20,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
    },
    goalAchievedText: {
        fontSize: 18,
        color: '#00C853',
        marginTop: 10,
        fontWeight: 'bold',
    },
    itemsHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemPrice: {
        fontSize: 16,
        color: '#777',
    },
    donateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    donationInput: {
        height: 40,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 10,
        flex: 1,
        marginRight: 10,
    },
    donateButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    donateButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addItemButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    addItemButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    modalHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 6,
        width: '100%',
        paddingLeft: 10,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default CoFundScreen;
