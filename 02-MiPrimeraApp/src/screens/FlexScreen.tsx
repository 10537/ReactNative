import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export const FlexScreen = () => {
  return (
    <View style= { styles.container } >
        <Text style={ styles.caja1 }>Caja 1</Text>
        <Text style={ styles.caja2 }>Caja 2</Text>
        <Text style={ styles.caja3 }>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        // flexWrap: 'wrap',
    },
    caja1: {
        // flex: 3,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'center',
    },
    caja2: {
        // flex: 2,
        backgroundColor: 'green',
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'flex-end',
    },
    caja3: {
        // flex: 1,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'flex-start',
    },
});

