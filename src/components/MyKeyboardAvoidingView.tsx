import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    Alert,
} from 'react-native';

const MyKeyboardAvoidingView = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');

    const submit = () => {
        Alert.alert("Form Submitted")
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setPhoneNumber('')
        setPin('')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.view}>
                        <Text style={styles.header}>Account Opening Form</Text>
                    </View>

                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Phone Number"
                        style={styles.textInput}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        placeholder="PIN"
                        style={styles.textInput}
                        value={pin}
                        onChangeText={(text) => {
                            // Only allow numbers
                            const numericText = text.replace(/[^0-9]/g, '');
                            setPin(numericText);
                        }}
                        keyboardType="number-pad"
                        maxLength={4} // Set a max length for the PIN
                    />

                    <View style={styles.btnContainer}>
                        <Button title="Submit" onPress={submit} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    view:{
        alignItems : 'center'
    },
    header: {
        fontSize: 26,
        marginBottom: 48,
        // alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});

export default MyKeyboardAvoidingView;
