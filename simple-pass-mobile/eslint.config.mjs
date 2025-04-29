import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,jsx}'], plugins: { js }, extends: ['js/recommended'] },
    { files: ['**/*.{js,mjs,cjs,jsx}'], languageOptions: { globals: globals.browser } },
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            semi: ['error', 'always'],
            'no-undef': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': 'error',
        },
    },
]);
