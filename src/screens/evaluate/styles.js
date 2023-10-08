import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textLarge: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21,
    },
    flex1: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    product: {
        padding: 24,
        paddingRight: 5,
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center',
    },
    productImage: {
        width: 54,
        height: 49,
    },
    productName: {
        fontSize: 16,
        lineHeight: 19,
        flex: 1,
        fontWeight: 700,
    },
    text: {
        marginTop: 36,
        textAlign: 'center',
    },
    starts: {
        marginTop: 18,
        flexDirection: 'row',
        gap: 14,
        justifyContent: 'center',
    },
    start: {
        width: 39,
        height: 39,
    },
    uploadImage: {
        height: 68,
        marginHorizontal: 34,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1511EB',
        borderRadius: 5,
        gap: 8,
    },
    uploadImageIcon: {
        width: 39,
        height: 32,
    },
    review: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 34,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5,
        minHeight: 300,
    },
    reviewInput: {
        flex: 1,
        paddingVertical: 11,
        paddingLeft: 19,
        paddingRight: 15,
    },
    meet: {
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'right',
        marginRight: 14,
        marginBottom: 5,
    },
    btn: {
        marginBottom: 20,
        marginHorizontal: 34,
        justifyContent: 'center',
        alignItems: 'center',
        height: 41,
        backgroundColor: '#0D5DB6',
        borderRadius: 5,
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'rgba(21, 17, 235, 1)',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23,
        color: '#fff',
    },
});

export default styles;
