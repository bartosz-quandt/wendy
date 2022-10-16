import { StackNavigationProp } from '@react-navigation/stack';
import { City } from '../features/city/cityAPI';

export type RootStackParamList = {
    Home: undefined;
    Details: {city: City};
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
