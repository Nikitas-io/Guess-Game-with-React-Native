import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../util/colors';

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        borderColor: Colors.darkRed,
        padding: 24, 
        borderRadius: 8,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.darkRed,
        fontSize: 36, 
        fontFamily: 'open-sans-bold'
    }
})