import {View, TextInput} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';

function StartGameScreen () {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: "#4b0920",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row"
    }
})