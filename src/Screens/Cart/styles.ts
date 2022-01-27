import { StyleSheet } from 'react-native';

import { theme } from '../../Global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray,
    },

    content: {
        flex: 1,
        backgroundColor: theme.colors.white,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

    subtitle: {
        fontFamily: theme.fonts.subtitle,
        color: theme.colors.orange,
        marginHorizontal: 20,
        marginTop: 40,
        fontSize: 20
    },

    title: {
        fontFamily: theme.fonts.title,
        color: theme.colors.gray,
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 50,
    },

    image: {
        height: 100,
        width: 100,
        marginVertical: 8,
        marginHorizontal: 14,
        borderRadius: 10
    },

    product: {
        fontFamily: theme.fonts.title,
        color: theme.colors.gray,
        fontSize: 20
    },

    payment: {
        fontFamily: theme.fonts.title,
        fontSize: 20,
        marginLeft: 30,
        marginVertical: 12
    },

})