module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
        'airbnb',
        'airbnb-typescript/base',
        'airbnb/hooks',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        // Let prettier handle styling. [indent, semicolons, commas]
        'arrow-body-style': 'off',

        // https://basarat.gitbook.io/typescript/main-1/defaultisbad
        // It is cleaner and easier to follow using named exports.
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',

        // https://eslint.org/docs/rules/no-console
        // Generate warning for console.log statement but allow .error and .warn.
        'no-console': ['warn', { allow: ['error', 'warn'] }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        // Allow arrow functions for functional components.
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function' },
        ],

        // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
        // Remove unused React imports. As of React 17 this is no longer needed.
        'react/react-in-jsx-scope': 'off',

        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],

        // Do no use prop-types with TypeScript.
        'react/prop-types': 'off',
        'react/require-default-props': 'off',

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        // Allow spreading props.
        'react/jsx-props-no-spreading': 'off',
    },
}
