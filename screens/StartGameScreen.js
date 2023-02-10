import {View, TextInput, Alert} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen ({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        console.log('The chosen text: ', enteredNumber);
        // Try to convert the text to a number.
        const chosenNumber = parseInt(enteredNumber);

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
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
                    <PrimaryButton buttonPressed={resetInputHandler}>Reset</PrimaryButton>
                    <PrimaryButton buttonPressed={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        marginTop: 50,
        marginHorizontal: 24,
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