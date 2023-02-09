
import { useState } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function GameScreen({userNumber}) {
    // Generate the initial guess.
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    // Set the initial guess as the current guess state.
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

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

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* GUESS */}
        <NumberContainer>{currentGuess}</NumberContainer>
        
        <View>
            <Text>Higher or lower?</Text>
            {/* +
            - */}
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})