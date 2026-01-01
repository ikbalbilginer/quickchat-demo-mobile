import { fonts } from '@/src/constants/fonts';
import { Text, TextProps, TextStyle } from 'react-native';

type FontWeight = 'regular' | 'bold';

interface CustomTextProps extends TextProps {
    weight?: FontWeight;
    size?: number;
    color?: string;
    children: React.ReactNode;
}

export function CustomText({
    weight = 'regular',
    size = 14,
    color,
    style,
    children,
    ...props
}: CustomTextProps) {
    const fontFamily = weight === 'bold' ? fonts.bold : fonts.regular;

    const textStyle: TextStyle = {
        fontFamily,
        fontSize: size,
        ...(color && { color }),
    };

    return (
        <Text {...props} style={[textStyle, style]} >
            {children}
        </Text>
    );
}
