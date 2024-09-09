module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@features': './src/features',
          '@service': './src/service',
          '@utils': './src/utils',
          '@components': './src/components',
          '@storage': './src/storage',
        },
      },
    ],
  ],
};
