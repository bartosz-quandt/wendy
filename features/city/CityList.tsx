import { useNavigation } from '@react-navigation/native';
import {
    Center, Input,
    Pressable,
    ScrollView,
    Text,
    VStack
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { NavigationProps } from '../../navigation/navigationProps';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSearchedCities, selectSearchedCities } from './citySlice';

const CityList: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const navigation = useNavigation<NavigationProps>();
    const dispatch = useAppDispatch();
    const searchedCities = useAppSelector(selectSearchedCities);

    useEffect(() => {
        dispatch(getSearchedCities(search));
    }, [search]);

    return (
        <ScrollView
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
        >
            <Center
                _dark={{ bg: 'blueGray.900' }}
                _light={{ bg: 'blueGray.50' }}
                px={4}
                flex={1}
                marginBottom={5}
            >
                <VStack space={5} alignItems="center">
                    <Input
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        variant="underlined"
                        placeholder="Search for city"
                    />
                    {searchedCities?.map((city) => (
                        <Pressable
                            key={city.name}
                            onPress={() =>
                                navigation.navigate('Details', { city })
                            }
                            minW="300"
                            alignItems="center"
                        >
                            <Text>{city.name}</Text>
                        </Pressable>
                    ))}
                </VStack>
            </Center>
        </ScrollView>
    );
};

export default CityList;
