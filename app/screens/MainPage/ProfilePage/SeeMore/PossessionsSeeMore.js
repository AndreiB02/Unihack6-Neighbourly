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
                    columnWrapperStyle={styles.cardWrapper}
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
        backgroundColor: '#f4f7f6',
        padding: 15,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    possessionTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: '#ed9c55',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#de685d',
        marginBottom: 20,
    },
    cardWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    itemName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    itemQuantity: {
        fontSize: 16,
        color: '#e88833',
        fontWeight: '500',
    },
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#ed9c55',
        width: 70,
        height: 70,
        borderRadius: 35,
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContainer: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 16,
        width: 320,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 12,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2E7D32',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#2E7D32',
        borderRadius: 12,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#f44336',
        paddingVertical: 12,
        borderRadius: 12,
        marginRight: 8,
        alignItems: 'center',
    },
    addButton: {
        flex: 1,
        backgroundColor: '#2E7D32',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PossessionsSeeMore;
