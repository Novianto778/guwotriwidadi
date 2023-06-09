/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                quicksand: 'var(--font-quicksand)',
                antiqua: 'var(--font-antiqua)',
            },
            height: {
                fullnonav: 'calc(100vh - 68px)',
            },
            zIndex: {
                9999: '9999',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
