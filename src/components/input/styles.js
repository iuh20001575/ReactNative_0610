import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderStyle: 'solid',
        paddingHorizontal: 9,
        paddingVertical: 11,
        flexDirection: 'row',
    },
    icon: { width: 32, height: 32 },
    leftIcon: { marginRight: 21 },
    input: {
        fontSize: 18,
        flex: 1,
    },
    rightIcon: {
        marginRight: 24,
    },
});

export default styles;