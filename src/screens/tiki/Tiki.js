import React, { useState } from 'react';
import { Image, Pressable, TouchableWithoutFeedback, View } from 'react-native';
import InputCustomize from '../../components/inputCustomize/InputCustomize';
import TextCustomize from '../../components/text/TextCustomize';
import Wrapper from '../../components/wrapper/Wrapper';
import colors from './colors';
import styles from './styles';

const Tiki = () => {
    const [qty, setQty] = useState(1);

    return (
        <Wrapper>
            <View style={[styles.container, styles.flex1]}>
                <View style={{ gap: 12 }}>
                    {/*  */}
                    <View style={styles.productWrapper}>
                        <View style={styles.product}>
                            <Image
                                style={styles.productImage}
                                source={require('../../../assets/book.png')}
                            />
                            <View style={[styles.productInfo, styles.flex1]}>
                                <TextCustomize style={[styles.textSmall]}>
                                    Nguyên hàm tích phân và ứng dụng
                                </TextCustomize>
                                <TextCustomize
                                    style={[styles.textSmall, styles.supplier]}
                                >
                                    Cung cấp bởi Tiki Trading
                                </TextCustomize>
                                <TextCustomize
                                    style={[
                                        styles.textMedium,
                                        styles.priceDiscount,
                                    ]}
                                >
                                    141.800 đ
                                </TextCustomize>
                                <TextCustomize
                                    style={[styles.textSmall, styles.price]}
                                >
                                    141.800 đ
                                </TextCustomize>
                                <View style={styles.action}>
                                    <View style={styles.qtyControl}>
                                        <Pressable style={styles.qtyBtn}>
                                            <TextCustomize
                                                style={[
                                                    styles.qtyBtnText,
                                                    qty <= 1 && styles.disabled,
                                                ]}
                                            >
                                                -
                                            </TextCustomize>
                                        </Pressable>
                                        <TextCustomize>{qty}</TextCustomize>
                                        <Pressable style={styles.qtyBtn}>
                                            <TextCustomize
                                                style={[styles.qtyBtnText]}
                                            >
                                                +
                                            </TextCustomize>
                                        </Pressable>
                                    </View>
                                    <TouchableWithoutFeedback>
                                        <TextCustomize
                                            style={[
                                                styles.textSmall,
                                                styles.buyAfterBtn,
                                            ]}
                                        >
                                            Mua sau
                                        </TextCustomize>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={styles.voucherManage}>
                            <TextCustomize
                                style={[styles.textSmall, styles.voucherTitle]}
                            >
                                Mã giảm giá đã lưu
                            </TextCustomize>
                            <TouchableWithoutFeedback>
                                <TextCustomize
                                    style={[
                                        styles.textSmall,
                                        styles.viewHereText,
                                    ]}
                                >
                                    Xem tại đây
                                </TextCustomize>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.voucherForm}>
                            <View style={styles.inputGroup}>
                                <View style={styles.sign}></View>
                                <InputCustomize
                                    style={[
                                        styles.textMedium,
                                        styles.voucher,
                                        styles.flex1,
                                    ]}
                                    placeholder='Mã giảm giá'
                                    placeholderTextColor={colors.textPrimary}
                                    textAlignVertical='center'
                                />
                            </View>
                            <Pressable style={styles.voucherBtn}>
                                <TextCustomize style={[styles.voucherBtnText]}>
                                    Áp dụng
                                </TextCustomize>
                            </Pressable>
                        </View>
                    </View>

                    {/*  */}
                    <View style={styles.giftContainer}>
                        <TextCustomize style={[styles.textSmall]}>
                            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                        </TextCustomize>
                        <TouchableWithoutFeedback>
                            <TextCustomize
                                style={[styles.textSmall, styles.giftBtnText]}
                            >
                                Nhập tại đây?
                            </TextCustomize>
                        </TouchableWithoutFeedback>
                    </View>

                    {/*  */}
                    <View style={styles.tempPrice}>
                        <TextCustomize style={[styles.textMedium]}>
                            Tạm tính
                        </TextCustomize>
                        <TextCustomize
                            style={[styles.textMedium, styles.tempPricePrice]}
                        >
                            141.800 đ
                        </TextCustomize>
                    </View>
                </View>

                {/*  */}
                <View style={styles.footer}>
                    <View style={styles.totalPrice}>
                        <TextCustomize
                            style={[styles.textMedium, styles.textSecondary]}
                        >
                            Thành tiền
                        </TextCustomize>
                        <TextCustomize
                            style={[styles.textMedium, styles.totalPricePrice]}
                        >
                            141.800 đ
                        </TextCustomize>
                    </View>
                    <Pressable style={styles.orderBtn}>
                        <TextCustomize style={[styles.orderBtnText]}>
                            TIẾN HÀNH ĐẶT HÀNG
                        </TextCustomize>
                    </Pressable>
                </View>
            </View>
        </Wrapper>
    );
};

export default Tiki;
