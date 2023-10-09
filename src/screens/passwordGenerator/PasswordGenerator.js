import React from 'react';
import { View } from 'react-native';
import RadialGradientCustomize from '../../components/radialGradientCustomize/RadialGradientCustomize';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './styles';

const colorList = [
    { offset: '40%', color: 'rgba(59, 59, 152, 1)' },
    { offset: '120%', color: 'rgba(196, 196, 196, 0)' },
];

const PasswordGenerator = () => {
    return (
        <Wrapper>
            <RadialGradientCustomize
                x='50%'
                y='50%'
                rx='85%'
                ry='85%'
                colorList={colorList}
                style={styles.flex1}
            >
                <View></View>
            </RadialGradientCustomize>
        </Wrapper>
    );
};

export default PasswordGenerator;
