const path = require('path');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'macros',
      ['import-graphql', {
        nodePath: path.resolve(process.cwd(), '../../modules'),
      }],
      ['inline-dotenv', {
        unsafe: true,
        path: path.resolve(process.cwd(), 'env/US.env'),
      }],
      [
        "inline-import",
        {
          "extensions": [".svgx"],
        }
      ],
    ],
  };
};
