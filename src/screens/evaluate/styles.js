import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textLarge: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21,
    },
    container: {
        flex: 1
    },
    product: {
        padding: 24,
        paddingRight: 5,
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center'
    },
    productImage: {
        width: 54,
        height: 49
    },
    productName: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 19,
        flex: 1
    },
    text: {
        marginTop: 36,
        textAlign: 'center'
    },
    starts: {
        marginTop: 18,
        flexDirection: 'row',
        gap: 14,
        justifyContent: 'center'
    },
    start: {
        width: 39,
        height: 39
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
        gap: 8
    },
    uploadImageIcon: {
        width: 39,
        height: 32
    },
    review: {
        marginTop: 15,
        marginHorizontal: 34,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5
    },
    reviewInput: {
        paddingVertical: 11,
        paddingLeft: 19,
        paddingRight: 15
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 41
    },
    btnText: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23,
    }
});

export default styles