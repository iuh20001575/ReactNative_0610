const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 23,
    },
    container: {
        padding: 19,
        paddingBottom: 16,
    },
    body: {
        backgroundColor: '#23235B',
        borderRadius: 15,
        paddingBottom: 20,
    },
    title: {
        paddingTop: 40,
        paddingHorizontal: 60,
        color: 'white',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
    },
    result: {
        marginHorizontal: 12,
        marginTop: 33,
        backgroundColor: '#151537',
    },
    resultText: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    form: {
        marginTop: 47,
        marginLeft: 19,
        marginRight: 12,
        gap: 30,
    },
    passwordLength: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    passwordLengthText: {
        whiteSpace: 'nowrap',
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        flex: 1,
        padding: 5,
        width: 0,
    },
    btn: {
        paddingVertical: 17,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(59, 59, 152, 1)',
        marginHorizontal: 26,
        marginTop: 36,
    },
    btnText: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: '#fff',
    },
});

export default styles;
