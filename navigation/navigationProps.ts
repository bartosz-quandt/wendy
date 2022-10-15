import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
