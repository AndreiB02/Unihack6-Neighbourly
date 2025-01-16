import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const PossessionsSeeMore = () => {
    const [possessions, setPossessions] = useState([
        { id: '1', item: 'Screwdriver', quantity: 1 },
        { id: '2', item: 'Chairs', quantity: 5 },
        { id: '3', item: 'Table', quantity: 1 },
        { id: '4', item: 'Laptop', quantity: 1 },
        { id: '5', item: 'Books', quantity: 20 },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');

    const addPossession = () => {
        if (newItemName.trim() === '' || newItemQuantity.trim() === '') {
            Alert.alert('Error', 'Please fill in both fields!');
            return;
        }
        const newPossession = {
            id: (possessions.length + 1).toString(),
            item: newItemName,
            quantity: parseInt(newItemQuantity),
        };
        setPossessions((prevPossessions) => [...prevPossessions, newPossession]);
        setNewItemName('');
        setNewItemQuantity('');
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.possessionTitle}>🛠️ Possessions</Text>
                <Text style={styles.sectionTitle}>Your Items</Text>
                <FlatList
                    data={possessions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.itemName}>{item.item}</Text>
                            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                        </View>
                    )}
                    numColumns={2}
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.floatingButton}
                accessibilityLabel="Add new possession"
                onPress={() => setModalVisible(true)}
            >
                <Icon name="add" size={30} color="#fff" />
            </TouchableOpacity>

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
                            placeholderTextColor="#888"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantity"
                            keyboardType="numeric"
                            value={newItemQuantity}
                            onChangeText={setNewItemQuantity}
                            placeholderTextColor="#888"
                        />
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={addPossession}
                            >
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#f0f4f8',
        padding: 15,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    possessionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ed9c55',
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: '600',
        color: '#de685d',
        marginBottom: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    itemQuantity: {
        fontSize: 16,
        color: '#e88833',
    },
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#ed9c55',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 12,
        width: 300,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#2E7D32',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#f44336',
        paddingVertical: 10,
        borderRadius: 8,
        marginRight: 8,
        alignItems: 'center',
    },
    addButton: {
        flex: 1,
        backgroundColor: '#2E7D32',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PossessionsSeeMore;
