import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style= { styles.title } >Box Object Model Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    title: {
      paddingVertical: 100,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      borderWidth: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
