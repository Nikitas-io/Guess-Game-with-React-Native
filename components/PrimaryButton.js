import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../util/colors";

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
        overflow: "hidden",
        flex: 1  
    }, 
    buttonInnerContainer: {
        backgroundColor: Colors.red,
        paddingVertical: 8, 
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{ 
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
})