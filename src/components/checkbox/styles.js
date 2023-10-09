import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        userSelect: 'none',
    },
    label: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23,
        color: '#fff',
    },
    checkbox: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: 20,
        height: 20,
    },
});

export default styles;
