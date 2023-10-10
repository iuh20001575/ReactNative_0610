import React, { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';
import useRobotoFont from '../../hooks/useRobotoFont';

const TextCustomize = (props, ref) => {
    const font = useRobotoFont();
    const styles = useMemo(() => {
        const style = props.style;

        if (!style) return [];

        if (Array.isArray(style)) return style;

        return [style, font];
    }, [font, props.style]);

    return <Text ref={ref} {...props} style={styles} />;
};

export default forwardRef(TextCustomize);
