import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>

            <Text style={styles.summaryText}>
                It took your phone <Text style={styles.highlight}>{roundsNumber}</Text> rounds 
                to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>

            <View style={styles.buttonContainer}>
                <PrimaryButton buttonPressed={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    ) 
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center", // Align content to the center of the Y axis.
        alignItems: "center", // Align content to the center of the X axis.
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 2,
        borderColor: Colors.darkRed,
        overflow: 'hidden', // Hide the edges of the Image contained in the container.
        margin: 36
    },
    image: {
        // Take up the entire image container.
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
        color: "white"
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: "white"
    },
    buttonContainer: {
        flexDirection: "row"
    }
})