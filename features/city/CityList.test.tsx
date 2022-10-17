import '@testing-library/jest-native/extend-expect';
import { NativeBaseProvider } from 'native-base';
import { nativebaseInset, renderWithProviders } from '../../testUtils';
import CityList from './CityList';
import * as navigation from '@react-navigation/native';
import { RootState } from '../../store/store';
import { fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native');

const inititalState: RootState = {
    city: {
        searchedCities: {
            list: [
                {
                    continent: 'Europe',
                    latitude: 32,
                    longitude: 32,
                    name: 'Wroclove',
                },
            ],
            status: 'idle',
        },
        cityWeather: {
            status: 'idle',
        },
    },
};

describe('CityList feature', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should display list of available cities', () => {
        const { getByLabelText } = renderWithProviders(
            <NativeBaseProvider initialWindowMetrics={nativebaseInset}>
                <CityList />
            </NativeBaseProvider>,
            {
                preloadedState: inititalState,
            }
        );

        expect(getByLabelText('city-list-name')).toHaveTextContent('Wroclove');
    });

    it('should trigger navigation change when city is selected', () => {
        const useNavigationSpy = jest.spyOn(navigation, 'useNavigation');
        useNavigationSpy.mockImplementation(() => ({
            navigate: () => jest.fn(),
        }));
        const { getByLabelText } = renderWithProviders(
            <NativeBaseProvider initialWindowMetrics={nativebaseInset}>
                <CityList />
            </NativeBaseProvider>,
            {
                preloadedState: inititalState,
            }
        );

        fireEvent.press(getByLabelText('city-list-name'));

        expect(useNavigationSpy).toBeCalledTimes(1);
    });
});
