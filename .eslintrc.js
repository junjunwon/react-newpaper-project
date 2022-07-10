module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"

    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {

          // React
        'react/jsx-boolean-value': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-fragments': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-uses-react': 'off',
        'react/prefer-stateless-function': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    }

}
