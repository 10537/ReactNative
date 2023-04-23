import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
  return (
    <View>
      <View style={ styles.container }>
          <View style={{ ...styles.cajaMorada,
          width: width * 0.6  }}/>
          <View style= { styles.cajaNaranja } />
      </View>
      <Text style={ styles.title }>W: {width} H: {height}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 600,
      backgroundColor: 'red',
    },
    cajaMorada: {
        width: '50%',
        height: '50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        // width: 100,
        // height: 100,
        backgroundColor: '#F0A23B',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
});
