import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { nativebaseInset } from '../testUtils';
import DailyWeather from './DailyWeather';

describe('DailyWather component', () => {
    it('should display image, min/max temperature and day', () => {
        const { getByLabelText } = render(
            <NativeBaseProvider initialWindowMetrics={nativebaseInset}>
                <DailyWeather
                    maxTemperature={10.0}
                    minTemperature={-10.0}
                    day={'1970-01-01'}
                />
            </NativeBaseProvider>
        );
        
        expect(getByLabelText('daily-weather-min-temperature')).toHaveTextContent('Min -10°C');
        expect(getByLabelText('daily-weather-max-temperature')).toHaveTextContent('Max 10°C');
        expect(getByLabelText('daily-weather-day')).toHaveTextContent('Thursday 1 January 1970');
    });
});
