import React from 'react';
import { View } from 'react-native';

import { theme } from '../../Global/Styles/theme';

export function ListDivider() {
    return <View style={{
        width: '70%',
        height: 0.4,
        alignSelf: 'flex-start',
        marginLeft: 22,
        backgroundColor: theme.colors.gray
    }}
    />
}