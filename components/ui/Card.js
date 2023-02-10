import { StyleSheet, View } from "react-native";
import Colors from "../../util/colors";

function Card({children}) {
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
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
    }
})

export default Card;