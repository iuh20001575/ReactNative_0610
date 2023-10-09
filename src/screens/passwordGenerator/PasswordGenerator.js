import React from 'react';
import { Pressable, View } from 'react-native';
import Checkbox from '../../components/checkbox/Checkbox';
import InputCustomize from '../../components/inputCustomize/InputCustomize';
import RadialGradientCustomize from '../../components/radialGradientCustomize/RadialGradientCustomize';
import TextCustomize from '../../components/text/TextCustomize';
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
                style={[styles.flex1, styles.container]}
            >
                <View style={[styles.body, styles.flex1]}>
                    <TextCustomize style={styles.title}>
                        PASSWORD GENERATOR
                    </TextCustomize>
                    <View style={[styles.result]}>
                        <TextCustomize style={[styles.resultText, styles.text]}>
                            {' '}
                        </TextCustomize>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.passwordLength}>
                            <TextCustomize
                                style={[styles.text, styles.passwordLengthText]}
                            >
                                Password length
                            </TextCustomize>
                            <InputCustomize
                                cursorColor='#000'
                                inputMode='numeric'
                                style={[styles.text, styles.input]}
                            />
                        </View>
                        <Checkbox>Include lower case letters</Checkbox>
                        <Checkbox>Include upcase letters</Checkbox>
                        <Checkbox>Include number</Checkbox>
                        <Checkbox>Include special symbol</Checkbox>
                    </View>
                    <Pressable style={styles.btn}>
                        <TextCustomize style={styles.btnText}>
                            GENERATE PASSWORD{' '}
                        </TextCustomize>
                    </Pressable>
                </View>
            </RadialGradientCustomize>
        </Wrapper>
    );
};

export default PasswordGenerator;
