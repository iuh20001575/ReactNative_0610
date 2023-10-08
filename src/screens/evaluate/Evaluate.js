import React from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import InputCustomize from '../../components/inputCustomize/InputCustomize';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const Evaluate = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.flex1}
                >
                    <ScrollView>
                        <View style={styles.product}>
                            <Image
                                style={styles.productImage}
                                source={require('../../../assets/usb.png')}
                            />
                            <TextCustomize style={[styles.productName]}>
                                USB Bluetooth Music Receiver HJX-001- Biến loa
                                thường thành loa bluetooth
                            </TextCustomize>
                        </View>
                        <TextCustomize style={[styles.text, styles.textLarge]}>
                            Cực kỳ hài lòng
                        </TextCustomize>
                        <View style={styles.starts}>
                            {new Array(5).fill(null).map((item, index) => (
                                <Image
                                    key={index}
                                    style={styles.start}
                                    source={require('../../../assets/star.png')}
                                />
                            ))}
                        </View>
                        <View style={styles.uploadImage}>
                            <Image
                                style={styles.uploadImageIcon}
                                source={require('../../../assets/camera.png')}
                            />
                            <TextCustomize style={[styles.textLarge]}>
                                Thêm hình ảnh
                            </TextCustomize>
                        </View>
                        <View style={styles.review}>
                            <InputCustomize
                                multiline
                                numberOfLines={11}
                                rows={11}
                                textBreakStrategy='simple'
                                style={[styles.reviewInput, styles.textLarge]}
                                placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                                placeholderTextColor='#c4c4c4'
                            />
                            <TextCustomize style={[styles.meet]}>
                                https://meet.google.com/nsj-ojwi-xpp
                            </TextCustomize>
                        </View>
                        <Pressable style={styles.btn}>
                            <TextCustomize style={styles.btnText}>
                                Gửi
                            </TextCustomize>
                        </Pressable>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Evaluate;
