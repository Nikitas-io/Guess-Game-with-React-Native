import { Text, StyleSheet } from 'react-native';

function InstructionText({children}) {
    return <Text style={styles.textInstruction}>{children}</Text>
}

export default InstructionText;

styles = StyleSheet.create({
    textInstruction: {
        color: "white"
    }
})