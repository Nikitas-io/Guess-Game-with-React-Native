
import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';

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

function GameScreen({userNumber, onGameOver}) {
    // Generate the initial guess (and do not include the seleced user number).
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    // Set the initial guess as the current guess state.
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    // Check if there are updates to the state
    useEffect(() => {

        console.log('The current guess: ', currentGuess);
        console.log('The user\'s number: ', userNumber);

        // Check if the system has guessed the user number correctly.
        if(currentGuess == userNumber) {
            console.log('THE GAME SHOULD BE OVER!');
            // The game is over, so show the appropriate screen.
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

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


    return (
        <View style={styles.rootContainer}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}

            <NumberContainer>{currentGuess}</NumberContainer>
            
            <Card>
                <InstructionText extraStyles={styles.textInstructions}>Higher or lower?</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton buttonPressed={newGuessHandler.bind(this, 'lower')} >
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                    <PrimaryButton buttonPressed={newGuessHandler.bind(this, 'greater')} >
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </Card>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        marginTop: 50,
        marginHorizontal: 24,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    textInstructions: {
        marginBottom: 10
    }

})