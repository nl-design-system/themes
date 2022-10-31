module.exports = {
  components: './components',
  openBrowser: true,
  outputPath: './dist/playroom',
  port: 6012,
  themes: './themes',
  title: 'NL Design System community playground',

  // Optional:
  //   snippets: './playroom/snippets.js',
  frameComponent: './FrameComponent.jsx',
  //   scope: './playroom/useScope.js',
  widths: [1024],
  //   paramType: 'search', // default is 'hash'
  exampleCode: `
    <UtrechtButton appearance='primary-action-button'>Read more...</UtrechtButton>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /(design-tokens|index)\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
