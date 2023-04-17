import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonToucheable } from '../components/ButtonToucheable';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return <View style={ styles.container }>
        <Text style={ styles.title }>Contador: { contador } </Text>
        <ButtonToucheable 
            title="+1"
            align="right"
            onPress={ () => setContador( contador + 1 ) }
        />
        <ButtonToucheable 
            title="-1"
            align="left"
            onPress={ () => setContador( contador - 1 ) }
        />
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
    }
});
