const path = require('path');

module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'macros',
      [
        'module-resolver',
        {
          alias: {
            react: path.resolve(process.cwd(), 'node_modules/react'),
          },
        },
      ],
      [
        'import-graphql',
        {
          nodePath: path.resolve(process.cwd(), '../../modules'),
        },
      ],
      [
        'inline-dotenv',
        {
          unsafe: true,
          path: path.resolve(process.cwd(), 'env/US.env'),
        },
      ],
      [
        'inline-import',
        {
          extensions: ['.svgx'],
        },
      ],
    ],
  };
};
