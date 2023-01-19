module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './assets',
            '@common': './src/components/common',
            '@components': './src/components',
            '@constants': './src/constants',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@mocks': './src/mocks',
            '@navigators': './src/navigators',
            '@screens': './src/screens',
            '@src': './src',
            '@store': './src/store',
            '@styles': './src/styles',
            '@test': './test',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
