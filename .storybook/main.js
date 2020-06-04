module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-scss',
    'storybook-addon-jsx',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("babel-preset-react-app")],
      },
    })

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },

  presets: {
    name: '@storybook/preset-scss',
    options: {
      sassLoaderOptions: {
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
      }
    }
  }
};
