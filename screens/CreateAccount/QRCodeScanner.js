import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useCameraDevice, useCameraPermission, Camera, useCodeScanner } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

const QRCodeScanner = ({route}) => {
    const navigation = useNavigation();
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const [isCodeScanned, setIsCodeScanned] = useState(false);
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            if (!isCodeScanned) {
                const value = codes[0].value;
                setIsCodeScanned(true);
                Alert.alert('Code Scanned', `Code: ${value}`, [
                    {
                        text: 'Inapoi',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => handleScanSuccess(value) },
                ]);
            }
        }
    });

    const handleScanSuccess = (value) => {
        navigation.navigate('AddAccount');
    };

    if (!hasPermission) {
        requestPermission();
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.headerText}>No permission</Text>
            </View>
        );
    }

    if (device == null) {
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.headerText}>No camera device found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>QR Code Scanner</Text>
            <Camera
                style={styles.camera}
                device={device}
                isActive={true}
                codeScanner={codeScanner}
                enableFpsGraph={true}
            />
            {isCodeScanned && (
                <TouchableOpacity style={styles.resetButton} onPress={() => setIsCodeScanned(false)}>
                    <Text style={styles.resetButtonText}>Scan Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
    },
    camera: {
        width: '100%',
        height: '80%',
    },
    resetButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default QRCodeScanner;
