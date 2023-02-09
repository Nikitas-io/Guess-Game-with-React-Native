
import { useState } from 'react';
import {Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    // Generate a random number between the min and max values.
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    // Make sure that the right number cannot be guessed right away.
    if(randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
    // Generate the initial guess (and do not include the seleced user number).
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    // Set the initial guess as the current guess state.
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    /**
     * 
     * @param {*} direction the direction has a value of either 'lower' or 'greater'
     */
    function newGuessHandler(direction) {
        console.log('The direction: ', direction);
        
        // Check if the dirrection given is a lie.
        if(
            (direction === 'lower' && currentGuess < userNumber)
            ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Don\'t lie!', 'You know what you are doing...', [{text: 'Sorry...', style: 'cancel'}]);
            return;
        }

        // If the new number should be lower, we know that the minimum boundary was ok,
        // but the max boundary needs to be adjusted because it was too high.
        if(direction === 'lower') {
            // Set the max boundary to the current guess.
            maxBoundary = currentGuess;
        } else {
            // Set the min boundary to the current guess + 1.
            minBoundary = currentGuess + 1;
        }
        // Generate a new random number within the allowed boundaries.
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber)
    }


    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* GUESS */}
        <NumberContainer>{currentGuess}</NumberContainer>
        
        <View style={styles.newGuess}>
            <Text>Higher or lower?</Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton buttonPressed={newGuessHandler.bind(this, 'lower')} >-</PrimaryButton>
                <PrimaryButton buttonPressed={newGuessHandler.bind(this, 'greater')} >+</PrimaryButton>
            </View>
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer: {
        flexDirection: "row"
    },
    newGuess: {
        alignItems: 'center'
    }
})