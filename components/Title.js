import { Text, StyleSheet } from "react-native";
import Colors from "../util/colors";

function Title ({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.darkRed,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.darkRed,
        padding: 12,
        borderRadius: 10        
    }
})