import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, VStack } from 'native-base';
import React, { useEffect } from 'react';
import DailyWeather from '../../components/DailyWeather';
import {
    RootStackParamList
} from '../../navigation/navigationProps';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCityWeather, selectCityWeather } from './citySlice';

const CityDetails: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
    const city = route.params.city;
    const weatherData = useAppSelector(selectCityWeather);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCityWeather(city));
    }, [city]);

    return (
        <ScrollView>
            <VStack space={5} marginBottom={5}>
                {weatherData?.daily.time?.map((day, index) => (
                    <DailyWeather
                        key={day}
                        maxTemperature={
                            weatherData?.daily?.temperature_2m_max?.[index]
                        }
                        minTemperature={
                            weatherData?.daily?.temperature_2m_min?.[index]
                        }
                        day={day}
                        index={index}
                    />
                ))}
            </VStack>
        </ScrollView>
    );
};

export default CityDetails;
