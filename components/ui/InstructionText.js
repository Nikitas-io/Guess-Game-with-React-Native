import { Text, StyleSheet } from 'react-native';

function InstructionText({children, extraStyles}) {
    return (<Text style={[styles.textInstructions, extraStyles]}>{children}</Text>);
}

export default InstructionText;

const styles = StyleSheet.create({
    textInstructions: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: "white",
    }
})