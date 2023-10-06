import React from 'react';
import { Image, View } from 'react-native';
import InputCustomize from '../inputCustomize/InputCustomize';
import styles from './styles';

const Input = ({ placeholder = '', leftIcon, rightIcon, ...props }) => {
    return (
        <View style={styles.container}>
            <Image style={[styles.icon, styles.leftIcon]} source={leftIcon} />
            <InputCustomize
                placeholder={placeholder}
                placeholderTextColor='#000'
                style={styles.input}
                {...props}
            />
            {rightIcon && (
                <Image
                    style={[styles.icon, styles.rightIcon]}
                    source={rightIcon}
                />
            )}
        </View>
    );
};

export default Input;
