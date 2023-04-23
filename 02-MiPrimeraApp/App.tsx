import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TareaScreen/>
    </SafeAreaView>
  );
};

