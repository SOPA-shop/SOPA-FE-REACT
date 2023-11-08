// .eslintrc.js

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "indent": ["error", 2],
        // "semi": "none",
        "quotes": ["error", "single"],
        "max-len": ["error", { "code": 100 }],
        "no-unused-vars": "error",
        "consistent-return": "error",
        "comma-dangle": "off",
    },
};
