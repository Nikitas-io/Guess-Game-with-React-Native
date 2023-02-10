import { Text, StyleSheet } from 'react-native';

function InstructionText({children, extraStyles}) {
    return <Text style={[styles.textInstruction, extraStyles]}>{children}</Text>
}

export default InstructionText;

styles = StyleSheet.create({
    textInstruction: {
        color: "white",
        fontSize: 20
    }
})