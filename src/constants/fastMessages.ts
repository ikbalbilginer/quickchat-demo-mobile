import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export type IoniconsName = ComponentProps<typeof Ionicons>['name'];

export interface FastMessage {
    icon: IoniconsName;
    text: string;
}

export const fastMessages: FastMessage[] = [
    {
        icon: 'thermometer-outline',
        text: "How do I correctly connect a two-wire room thermostat (on/off) to the Bosch 30 HRC Turbo Tower Solar?"
    },
    {
        icon: 'warning-outline',
        text: "What critical points should I inspect during a low-pressure alarm in the heating system of the Bosch Compress 3400i AWS?"
    },
    {
        icon: 'water-outline',
        text: "How do I correctly clean the condensate water siphon in the Bosch 30 HRC Turbo Tower Solar?"
    },
    {
        icon: 'shield-checkmark-outline',
        text: "What measures should I take to maintain water quality and prevent corrosion or scale formation in the heating system of the Bosch Compress 3400i AWS?"
    }
];
