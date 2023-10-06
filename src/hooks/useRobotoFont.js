import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

function useRobotoFont() {
    const [loaded] = useFonts({ Roboto_400Regular });

    if (loaded)
        return {
            fontFamily: `Roboto_400Regular`,
        };

    return {};
}

export default useRobotoFont;