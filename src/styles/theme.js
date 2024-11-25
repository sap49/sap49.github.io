import {createTheme} from "@nextui-org/react";

export const customTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            background: '#f5f5f5',
            primary: '#7d0121',
            primaryLight: '#7d0121',
            primaryGold: '#d6b13a',

            gradient: "linear-gradient(90deg, rgba(125,1,33,1) 0%, rgba(214,177,58,1) 100%)",
            sangeetGradient: "linear-gradient(90deg, rgba(0,98,98,1) 0%, rgba(244,191,199,1) 100%)",
            link: '#5E1DAD',
        },
        space: {},
        fonts: {
            serif: "'Kotta One', 'Cormorant Upright'"
        },
        fontSizes: {
            xs: '0.75rem', /* 12px */
            sm: '0.875rem', /* 14px */
            base: '1rem', /* 16px */
            md: '1rem', /* 16px */
            lg: '1.125rem', /* 18px */
            xl: '1.25rem', /* 20px */
            '2xl': '1.5rem', /* 24px */
            '3xl': '1.875rem', /* 30px */
            '4xl': '2.25rem', /* 36px */
            '5xl': '3rem', /* 48px */
            '6xl': '3.75rem', /* 60px */
            '7xl': '4.5rem', /* 72px */
            '8xl': '6rem', /* 96px */
            '9xl': '8rem', /* 128px */
        }
    }
})

