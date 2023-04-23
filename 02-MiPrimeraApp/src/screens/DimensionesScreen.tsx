import React from 'react';
import { StyleSheet, View } from 'react-native';

export const DimensionesScreen = () => {
  return (
    <View>
        <View style= { styles.cajaMorada }/>
        <View style= { styles.cajaNaranja } />
    </View>
  );
};


const styles = StyleSheet.create({
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
    },
});
