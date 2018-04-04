
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    plugins: ['vue'],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0
    }
}
