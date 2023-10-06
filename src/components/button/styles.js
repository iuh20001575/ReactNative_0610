import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
    },
    primary: {
        backgroundColor: 'rgba(227, 192, 0, 1)',
        paddingHorizontal: 30,
        paddingVertical: 12,
    },
    secondary: {
        backgroundColor: 'rgba(229, 57, 53, 1)',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    dark: {
        backgroundColor: '#060000',
        paddingHorizontal: 30,
        paddingVertical: 9,
    },
    small: {
        fontSize: 18,
        lineHeight: 21,
    },
    medium: {
        fontSize: 20,
        lineHeight: 23,
    },
    large: {
        fontSize: 18,
        lineHeight: 25,
    },
    full: {
        width: '100%',
    },
});

export default styles;