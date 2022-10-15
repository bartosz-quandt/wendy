import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import NativeBaseBoilerPlate from './components/NativeBaseBoilerPlate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Example from './components/Example';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RootStackParamList } from './navigation/navigationProps';

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

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={NativeBaseBoilerPlate} />
            <Stack.Screen name="Details" component={Example} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
