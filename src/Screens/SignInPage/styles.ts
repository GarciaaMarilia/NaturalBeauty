import { StyleSheet } from "react-native";

import { theme } from '../../Global/Styles/theme';

export const styles = StyleSheet.create({
    image: {
        flex: 1,
    },

    containerDown: {
        backgroundColor: theme.colors.white,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        flex: 1
    },

    subtitle: {
        fontFamily: theme.fonts.subtitle,
        color: theme.colors.orange,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 50,
        fontSize: 20
    },

    buttonRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    title: {
        fontFamily: theme.fonts.title,
        color: theme.colors.gray,
        marginLeft: 20,
        fontSize: 50
    },

    button: {
        backgroundColor: theme.colors.paleBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 30,
        marginTop: 16,
        height: 80,
        width: 80
    },
})