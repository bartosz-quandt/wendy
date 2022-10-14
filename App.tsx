import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import NativeBaseBoilerPlate from './components/NativeBaseBoilerPlate';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends MyThemeType { }
}
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NativeBaseBoilerPlate />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
