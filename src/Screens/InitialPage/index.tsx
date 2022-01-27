import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

import Background from '../../Components/Background';
import { theme } from '../../Global/Styles/theme';
import { styles } from './styles';

export function InitialPage() {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('TabRoutes');
    }

    return (
        <Background>

            <View style={styles.image}>

                <Image
                    source={require('../../../assets/picture.png')}
                    resizeMethod='scale'
                />

            </View>
            <View style={styles.containerDown}>

                <Text style={styles.subtitle}>
                    Meet new era of
                </Text>

                <View style={styles.buttonRow} >

                    <Text style={styles.title}>
                        Natural Beauty Cosmetics
                    </Text>

                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={handleSignIn}
                    >

                        <Icon
                            name="chevron-right"
                            size={30}
                            color={theme.colors.gray}
                        />

                    </Button>

                </View>
            </View>

        </Background>
    );
}