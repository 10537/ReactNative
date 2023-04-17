import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';


interface Props {
    title: string;
    align?: 'right' | 'left';
    onPress?: () => void;
}

export const ButtonToucheable = ( { title, align, onPress }: Props) => {

    const ios = () => {
        return (
            <View style={ align === 'right' ? styles.buttonLocationRight : styles.buttonLocationLeft }>
                <TouchableOpacity
                    activeOpacity={ 0.8 }
                    onPress={ onPress }
                >
                    <View style={ styles.buttonToucheable }>
                        <Text style={ styles.textButton }>{ title }</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    };

    const android = () => {
        return (
            <View style={ align === 'right' ? styles.buttonLocationRight : styles.buttonLocationLeft }>
                <TouchableNativeFeedback 
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={ styles.buttonToucheable }>
                        <Text style={ styles.textButton }>{ title }</Text>
                    </View>

                </TouchableNativeFeedback>
            </View>
        )
    };

    return ( Platform.OS === 'ios' ) ? ios() : android();
};

const styles = StyleSheet.create({
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 6,
    },
    textButton: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});
