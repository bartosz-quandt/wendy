import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityDetails from './features/city/CityDetails';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RootStackParamList } from './navigation/navigationProps';
import CityList from './features/city/CityList';

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
    interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={CityList}
                            options={{ title: 'Choose your city' }}
                        />
                        <Stack.Screen
                            name="Details"
                            component={CityDetails}
                            options={({ route }) => ({
                                title: route.params.city.name,
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    );
}
