import React from 'react';
import {
    Keyboard,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

const Wrapper = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[styles.flex1, styles.container]}>
                <ScrollView contentContainerStyle={[styles.flex1]}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Wrapper;
