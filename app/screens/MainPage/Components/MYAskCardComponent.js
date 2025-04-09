// MYAskCardComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Alert, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MYAskCardComponent = ({ name, profileImage, contact, description, host, onModify, onDelete }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [pauseModalVisible, setPauseModalVisible] = useState(false);

    const handlePauseToggle = () => {
        setPauseModalVisible(false);
        setIsPaused(!isPaused);
    };

    const handleDeleteConfirm = () => {
        setDeleteModalVisible(false);
        onDelete();
    };

    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
                <Image source={{ uri: profileImage ? profileImage: 'https://pbs.twimg.com/media/EEUy6MCU0AErfve.png'}} style={styles.profileImage} />
                <View style={styles.profileDetails}>
                    <Text style={styles.cardTitle}>{name}</Text>
                    <Text style={styles.cardName}>{host}</Text>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity onPress={() => setEditModalVisible(true)}>
                        <Icon name="create-outline" size={20} color="#4CAF50" style={styles.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPauseModalVisible(true)}>
                        <Icon
                            name={isPaused ? "play-outline" : "pause-outline"}
                            size={20}
                            color={isPaused ? "#FF5722" : "#FFC107"}
                            style={styles.actionIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
                        <Icon name="trash-outline" size={20} color="#FF5722" style={styles.actionIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.contactSection}>
                    <Icon name="call" size={18} color="#4CAF50" />
                    <Text style={styles.contactText}>{contact}</Text>
                </View>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>

            {/* Edit Modal */}
            <Modal visible={editModalVisible} transparent={true} animationType="slide">
                <TouchableWithoutFeedback onPress={() => setEditModalVisible(false)}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>Edit Request</Text>
                                <TextInput style={styles.modalInput} placeholder="Title" value={name} />
                                <TextInput style={styles.modalInput} placeholder="Contact information" value={contact} />
                                <TextInput style={[styles.modalInput, styles.modalDescriptionInput]} placeholder="Description" value={description} multiline />
                                <TouchableOpacity style={styles.modalButton} onPress={() => { setEditModalVisible(false); onModify(); }}>
                                    <Text style={styles.modalButtonText}>Save Changes</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal visible={deleteModalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={() => setDeleteModalVisible(false)}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>Do you wish to delete?</Text>
                                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#FF5722' }]} onPress={handleDeleteConfirm}>
                                    <Text style={styles.modalButtonText}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#777' }]} onPress={() => setDeleteModalVisible(false)}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* Pause Confirmation Modal */}
            <Modal visible={pauseModalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={() => setPauseModalVisible(false)}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>{isPaused ? "Resume this offering?" : "Pause this offering?"}</Text>
                                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#FFC107' }]} onPress={handlePauseToggle}>
                                    <Text style={styles.modalButtonText}>{isPaused ? "Resume" : "Pause"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#777' }]} onPress={() => setPauseModalVisible(false)}>
                                    <Text style={styles.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileDetails: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    cardName: {
        fontSize: 16,
        color: '#666',
    },
    actionButtons: {
        flexDirection: 'row',
    },
    actionIcon: {
        marginLeft: 10,
    },
    content: {
        marginTop: 5,
    },
    contactSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactText: {
        fontSize: 17,
        color: '#333',
        marginLeft: 5,
    },
    description: {
        fontSize: 17,
        color: '#333',
    },
    // Modal Styles
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalInput: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 8,
    },
    modalDescriptionInput: {
        height: 80,
        textAlignVertical: 'top',
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default MYAskCardComponent;
