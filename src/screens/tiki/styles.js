import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    flex1: { flex: 1 },
    textSmall: {
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14,
        color: colors.textPrimary,
    },
    textMedium: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        color: colors.textPrimary,
    },
    textSecondary: {
        color: colors.textSecondary,
    },
    textPrimary: {
        color: colors.textPrimary,
    },
    container: {
        backgroundColor: colors.qtyBtn,
        justifyContent: 'space-between',
        gap: 12,
    },
    productWrapper: {
        paddingHorizontal: 12,
        paddingTop: 14,
        paddingBottom: 27,
        backgroundColor: colors.white,
    },
    product: {
        flexDirection: 'row',
        gap: 25,
    },
    productImage: {
        width: 104,
    },
    productInfo: {},
    name: {},
    supplier: {
        marginTop: 14,
    },
    priceDiscount: {
        marginTop: 11,
        color: colors.primary,
    },
    price: {
        marginTop: 11,
        color: colors.textSecondary,
        textDecorationLine: 'line-through',
    },
    action: {
        flexDirection: 'row',
        marginTop: 11,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    qtyControl: {
        flexDirection: 'row',
        gap: 11,
        alignItems: 'center',
    },
    qtyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 16,
        height: 16,
        backgroundColor: colors.qtyBtn,
    },
    qtyBtnText: {
        color: colors.textPrimary,
        fontWeight: '700',
        lineHeight: 16,
    },
    disabled: {
        color: colors.textSecondary,
    },
    buyAfterBtn: {
        color: colors.secondary,
    },
    voucherManage: {
        marginTop: 21,
        flexDirection: 'row',
        gap: 17,
    },
    voucherTitle: {},
    viewHereText: {
        color: colors.secondary,
    },
    voucherForm: {
        marginTop: 35,
        flexDirection: 'row',
        gap: 24,
    },
    inputGroup: {
        paddingHorizontal: 13,
        flex: 1,
        gap: 9,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.textSecondary,
        borderRadius: 2,
    },
    sign: {
        width: 32,
        height: 16,
        backgroundColor: colors.yellow,
    },
    voucher: {
        width: 0,
    },
    voucherBtn: {
        paddingHorizontal: 12,
        paddingVertical: 11,
        backgroundColor: colors.secondaryBtn,
        borderRadius: 2,
    },
    voucherBtnText: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 23,
        color: colors.white,
    },
    giftContainer: {
        marginTop: 2,
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 13,
        paddingTop: 15,
        paddingBottom: 22,
        backgroundColor: colors.white,
    },
    giftBtnText: {
        color: colors.secondary,
    },
    tempPrice: {
        paddingTop: 10,
        paddingLeft: 12,
        paddingBottom: 20,
        paddingRight: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    tempPricePrice: {
        color: colors.primary,
    },
    footer: {
        // marginTop: 'auto',
        paddingVertical: 16,
        paddingHorizontal: 13,
        backgroundColor: colors.white,
    },
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalPricePrice: {
        color: colors.primary,
    },
    orderBtn: {
        marginTop: 21,
        padding: 11,
        backgroundColor: colors.primaryBtn,
        borderRadius: 2,
    },
    orderBtnText: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23,
        color: colors.white,
        textAlign: 'center',
    },
});

export default styles;
