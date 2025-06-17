import js from '@eslint/js';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
    { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
    {
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            semi: ['error', 'always'],
            'no-undef': 'off',
            'prettier/prettier': 'error',
        },
    },
]);
