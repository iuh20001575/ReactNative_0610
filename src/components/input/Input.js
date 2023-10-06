import { View, Text, Platform, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { TextInput } from 'react-native';

const Input = ({ placeholder = '', leftIcon, rightIcon, ...props }) => {
    return (
        <View style={styles.container}>
            <Image style={[styles.icon, styles.leftIcon]} source={leftIcon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#000'
                style={[
                    styles.input,
                    Platform.OS === 'web'
                        ? {
                              outlineStyle: 'none',
                          }
                        : {},
                ]}
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