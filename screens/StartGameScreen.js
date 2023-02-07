import {View, TextInput, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '../util/colors';

function StartGameScreen ({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        console.log('The entered text: ', enteredText);
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        console.log('The chosen text: ', enteredNumber);
        // Try to convert the text to a number.
        const chosenNumber = parseInt(enteredNumber);

        console.log('The chosen number: ', chosenNumber);

        // Check if the chosen input is actually a double digit positive number.
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // Show alert.
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: "destructive", onPress: resetInputHandler}]
            )

            // Cancel the function's execution.
            return;
        }

        onConfirmNumber(enteredNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton buttonPressed={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.darkRed,
        // Android shadow
        elevation: 8,
        // iOS shadow
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 2,
        color: Colors.yellow,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row"
    }
})