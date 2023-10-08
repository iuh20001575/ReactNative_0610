import React, { useMemo } from 'react';
import { Platform, TextInput } from 'react-native';

const InputCustomize = ({ style = {}, ...props }) => {
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        if (Platform.OS === 'web')
            styles.push({
                outlineStyle: 'none',
            });

        return styles;
    }, [style]);

    return <TextInput textAlignVertical='top' style={styles} {...props} />;
};

export default InputCustomize;
