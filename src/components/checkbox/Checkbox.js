import React, { useState } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const Checkbox = ({ children, onChange = () => {} }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((checked) => !checked);
        onChange();
    };

    return (
        <View style={styles.container}>
            <TextCustomize style={[styles.label]}>{children}</TextCustomize>
            <TouchableWithoutFeedback onPress={handleChange}>
                <View style={styles.checkbox}>
                    {checked && (
                        <Image
                            style={styles.checkIcon}
                            source={require('../../../assets/checkIcon.png')}
                        />
                    )}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Checkbox;
