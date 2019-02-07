module.exports = {
    'presets': [
        ['@babel/preset-env', {
            'useBuiltIns': 'usage',
            'targets': {
                'chrome': 50,
                'explorer': 11,
                'firefox': 45,
            },
        }]
    ],
    'overrides': [{
        'sourceType': 'unambiguous',
    }],
};
