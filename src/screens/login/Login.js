import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import TextCustomize from '../../components/text/TextCustomize';
import users from '../../data/users';
import styles from './styles';

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const isLoginSuccess = users.some(user => user.username === username && user.password === password)

        if (isLoginSuccess)
            Platform.OS === 'web' ? alert('Login successfully!') :
                Alert.alert('Infor', 'Login successfully!')
        else Platform.OS === 'web' ? alert('Login fail.') :
            Alert.alert('Infor', 'Login fail.')
    }

    return (
        <LinearGradient
            colors={['#FBCB00', '#BF9A00']}
            style={styles.container}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    <TextCustomize style={styles.title}>Login</TextCustomize>
                    <View style={styles.form}>
                        <Input
                            value={username}
                            onChangeText={setUserName}
                            placeholder='Name'
                            leftIcon={require('../../../assets/avatar_user.png')}
                        />
                        <Input
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Password'
                            leftIcon={require('../../../assets/lock_32x32.png')}
                            rightIcon={require('../../../assets/eye_32x32.png')}
                            secureTextEntry
                        />
                    </View>
                    <Button type='dark' size='large' style={[styles.btn]} onPress={handleLogin}>
                        Login
                    </Button>
                    <TextCustomize style={styles.signUp}>
                        Forgot your password?
                    </TextCustomize>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
