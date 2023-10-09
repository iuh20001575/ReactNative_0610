import React from 'react';
import { Platform, View } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import styles from './styles';

const RadialGradientCustomize = ({
    x,
    y,
    rx,
    ry,
    colorList,
    children,
    style = [],
    ...props
}) => {
    if (Platform.OS === 'web')
        return (
            <View
                style={[
                    ...(Array.isArray(style) ? style : [style]),
                    {
                        backgroundImage: `radial-gradient(${rx} ${ry} at ${x} ${y}, ${colorList
                            .map((color) => `${color.color} ${color.offset}`)
                            .join(', ')})`,
                    },
                ]}
                {...props}
            >
                {children}
            </View>
        );

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={[styles.gradientBg]}>
                <RadialGradient
                    x={x}
                    y={y}
                    rx={rx}
                    ry={ry}
                    colorList={colorList}
                />
            </View>
            <View style={style} {...props}>
                {children}
            </View>
        </View>
    );
};

export default RadialGradientCustomize;
