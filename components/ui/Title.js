import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../util/colors";

function Title ({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: "white",
        textAlign: 'center',
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: Colors.darkRed,
        padding: 12,
        borderRadius: 10        
    }
})