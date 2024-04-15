// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        },
        fontSize: {
            sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
            base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
            lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
            xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
            "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
            "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
            "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
            "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
            "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
            "7xl": "clamp(5.96rem, 10.34vw + 3.33rem, 11.22rem)",
            "8xl": "clamp(7.45rem, 13.76vw + 3.8rem, 14rem)",
            "9xl": "clamp(9.31rem, 17.82vw + 4.31rem, 17.77rem)"
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
