import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380) {
        // Make it smaller on small devices.
        imageSize = 150;
    }

    if (height < 400) {
        // Make it even smaller in landscape mode.
        imageSize = 100;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize /2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>

                <View style={[styles.imageContainer, imageStyle]}>
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
        </ScrollView>
    ) 
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        marginTop: 20,
        flex: 1,
        padding: 24,
        justifyContent: "center", // Align content to the center of the Y axis.
        alignItems: "center", // Align content to the center of the X axis.
    },
    imageContainer: {
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