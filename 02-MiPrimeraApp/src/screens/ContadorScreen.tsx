import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return <View style={ styles.container }>
        <Text style={ styles.title }>Contador: { contador } </Text>
        <TouchableOpacity style={ styles.buttonLocationRight }
            onPress={() => {
                setContador(contador + 1);
            }}
        >
            <View style={ styles.buttonToucheable }><Text style={ styles.textButton }>+1</Text></View>

        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttonLocationLeft }
            onPress={() => {
                setContador(contador - 1);
            }}
        >
            <View style={ styles.buttonToucheable }><Text style={ styles.textButton }>-1</Text></View>

        </TouchableOpacity>
    </View>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15,
    },
    buttonLocationRight: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    buttonLocationLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    buttonToucheable: {
        backgroundColor: '#5856D6',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});
