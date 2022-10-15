import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, HStack, VStack } from 'native-base';
import React from 'react';
import { NavigationProps } from '../navigation/navigationProps';

const Example: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();

    return (<Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
    >
        <VStack space={5} alignItems="center">
            <HStack space={2} alignItems="center">
                <Box
                    _web={{
                        _text: {
                            fontFamily: 'monospace',
                            fontSize: 'sm',
                        },
                    }}
                    px={2}
                    py={1}
                    _dark={{ bg: 'blueGray.800' }}
                    _light={{ bg: 'blueGray.200' }}
                >
                    Testing
                    <Button onPress={() => navigation.navigate('Home')}>Click Me</Button>
                </Box>
            </HStack>
        </VStack>
    </Center>)
}


export default Example;
