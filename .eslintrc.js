module.exports = {
    'env': {
        'browser': true,
    },
    'parser': 'babel-eslint',
    'extends': [
        'airbnb-base',
    ],
    'rules': {
        'no-console': 0,
        'indent': [
            'error',
            4,
        ],
        'max-len': [
            'error',
            {
                'ignoreComments': true,
                'code': 160,
            },
        ],
    },
};
