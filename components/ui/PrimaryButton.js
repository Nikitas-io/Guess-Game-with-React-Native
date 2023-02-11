import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function PrimaryButton ({children, buttonPressed}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => (pressed) ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={buttonPressed} 
                android_ripple={{ color: Colors.lightRed }} 
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>    
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        flex: 1,
        overflow: "hidden",
    }, 
    buttonInnerContainer: {
        backgroundColor: Colors.red,
        paddingVertical: 8, 
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{ 
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "open-sans"
    },
    pressed: {
        opacity: 0.75
    }
})