import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Colors from '../../util/colors';

function NumberContainer({children}){
    // Get the width and height of the device dynamically.
    const {width} = useWindowDimensions();
    // Set the styles dynamically.
    let dynamicContainer;
    if(width < 380) {
        dynamicContainer = {
            marginHorizontal: 0,
            marginTop: 29
        }
    } else {
        dynamicContainer = {
            marginHorizontal: 20,
            marginVertical: 30
        }
    }

    return (
        <View style={[styles.container, dynamicContainer]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4, 
        padding: 24, 
        borderColor: Colors.darkRed,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.darkRed,
        fontSize: 36, 
        fontFamily: 'open-sans-bold'
    }
})