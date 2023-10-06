import React, { useMemo } from 'react';
import { Text } from 'react-native';
import useRobotoFont from '../../hooks/useRobotoFont';

const TextCustomize = (props) => {
    const font = useRobotoFont();
    const styles = useMemo(() => {
        const style = props.style;

        if (!style) return [];

        if (Array.isArray(style)) return style;

        return [style, font];
    }, [font, props.style]);

    return <Text {...props} style={[...styles]} />;
};

export default TextCustomize;