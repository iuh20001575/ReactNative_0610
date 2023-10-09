const { StyleSheet, Platform, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
});

export default styles;
