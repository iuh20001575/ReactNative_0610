import { View, Text, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import TextCustomize from '../../components/text/TextCustomize'

const Evaluate = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.product}>
                <Image style={styles.productImage} source={require('../../../assets/usb.png')} />
                <TextCustomize style={styles.productName}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</TextCustomize>
            </View>
            <TextCustomize style={[styles.text, styles.textLarge]}>Cực kỳ hài lòng</TextCustomize>
            <View style={styles.starts}>
                {new Array(5).fill(null).map((item, index) =>
                    <Image key={index} style={styles.start} source={require('../../../assets/star.png')} />
                )}
            </View>
            <View style={styles.uploadImage}>
                <Image style={styles.uploadImageIcon} source={require('../../../assets/camera.png')} />
                <TextCustomize style={styles.textLarge}>Thêm hình ảnh</TextCustomize>
            </View>
            <View style={styles.review}>
                <TextInput multiline numberOfLines={11} textBreakStrategy='simple' style={[styles.textLarge, styles.reviewInput]} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm' placeholderTextColor='#c4c4c4'></TextInput>
            </View>
            <Pressable style={styles.btn}>
                <TextCustomize style={styles.btnText}>Gửi</TextCustomize>
            </Pressable>
        </SafeAreaView>
    )
}

export default Evaluate