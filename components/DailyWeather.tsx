import { AspectRatio, Box, Center, Heading, Image, Stack } from 'native-base';
import React from 'react';
import { DateTime } from 'luxon';
import { ColorType } from 'native-base/lib/typescript/components/types';

const randomColor = (): ColorType => {
    const colorList: ColorType[] = [
        'blue.100',
        'coolGray.800',
        'indigo.100',
        'info.100',
        'muted.50',
        'lightBlue.600',
    ];
    return colorList[Math.floor(Math.random() * colorList.length)];
};

const DailyWeather: React.FC<{
    maxTemperature?: number;
    minTemperature?: number;
    day?: string;
    index?: number;
}> = ({ maxTemperature, minTemperature, day, index }) => {
    return (
        <Box alignItems="center">
            <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: 'coolGray.600',
                    backgroundColor: 'gray.700',
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: 'gray.50',
                }}
            >
                <Box>
                    <Center
                        bg="coolGray.700"
                        _dark={{
                            bg: 'coolGray.300',
                        }}
                        _text={{
                            color: 'warmGray.50',
                            fontWeight: '700',
                            fontSize: 'sm',
                        }}
                        px="3"
                        py="1.5"
                        accessibilityLabel="daily-weather-day"
                    >
                        {day && DateTime.fromISO(day).toFormat('cccc d LLLL y')}
                    </Center>
                    <AspectRatio
                        accessibilityLabel="daily-weather-image"
                        w="100%"
                        ratio={16 / 4}
                        backgroundColor={randomColor()}
                        alignItems="center"
                        alignContent="center"
                    >
                        <Image
                            source={{
                                uri: `https://picsum.photos/200/300?random=${index}`,
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                    <Stack
                        space={2}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Heading
                            size="xs"
                            ml="-1"
                            accessibilityLabel="daily-weather-min-temperature"
                        >
                            Min {minTemperature}&deg;C
                        </Heading>
                        <Heading
                            size="xs"
                            ml="-1"
                            accessibilityLabel="daily-weather-max-temperature"
                        >
                            Max {maxTemperature}&deg;C
                        </Heading>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default DailyWeather;
