// module.exports = {
//   transformer: {
//     assetPlugins: ["expo-asset/tools/hashAssetFiles"],
//   },
// };

const { createMetroConfiguration } = require('expo-yarn-workspaces');

// // module.exports = createMetroConfiguration(__dirname);

const blacklist = require('metro-config/src/defaults/blacklist');
const path = require('path');

function getConfig(appDir, options = {}) {
  const expoMetroWS = createMetroConfiguration(__dirname);

  const appName = path.basename(appDir);
  // Add additional Yarn workspace package roots to the module map
  // https://bit.ly/2LHHTP0
  const watchFolders = [
    path.resolve(appDir, '..', '..', 'modules'),
    path.resolve(appDir, '..', '..', 'node_modules'),
    // path.join(appDir, 'node_modules'),
    // ...workspaces.filter(
    //   workspaceDir => !(workspaceDir === appDir),
    // ),
    // ...expoMetroWS.watchFolders,
  ];

  const blackListResolver = blacklist([
    // Ignore other resolved react-native installations outside of
    // myapp-native - this prevents a module naming collision when mapped.
    // /^((?!vl-starter-bare).)+[\/\\]node_modules[/\\]react-native[/\\].*/,
    RegExp(
      `^((?!${appName}).)+[\/\\\\]node_modules[/\\\\]react-native[/\\\\].*`
    ),
    RegExp(
      `^((?!${appName}).)+[\/\\\\]node_modules[/\\\\]@react-navigation[/\\\\].*`
    ),
    RegExp(`^((?!${appName}).)+[\/\\\\]node_modules[/\\\\]react[/\\\\].*`),

    // Ignore react-native-svg dependency in myapp-ui, mapped below.
    // react-native-svg must only be included once due to a side-effect. It
    // has not been hoisted as it requires native module linking here.
    // http://bit.ly/2LJ7V4b
    // /myapp-ui[\/\\]node_modules[/\\]react-native-svg[/\\].*/,
    expoMetroWS.resolver.blacklistRE,
  ]);

  const rtn = {
    ...expoMetroWS,
    watchFolders,
    resolver: {
      ...expoMetroWS.resolver,
      blacklistRE: blackListResolver,
      // blacklistRE: blackListResolver,
      extraNodeModules: new Proxy(
        {
          // Resolve all react-native module imports to the locally-installed version
          'react-native': path.resolve(appDir, 'node_modules', 'react-native'),
          '@expo/vector-icons/FontAwesome': path.resolve(
            appDir,
            'node_modules',
            '@expo/vector-icons/FontAwesome'
          ),
          '@expo/vector-icons/Feather': path.resolve(
            appDir,
            'node_modules',
            '@expo/vector-icons/Feather'
          ),

          // Resolve additional nohoist modules depended on by other packages
          // 'react-native-svg': path.resolve(
          //   appDir,
          //   'node_modules',
          //   'react-native-svg',
          // ),

          // Resolve core-js imports to the locally installed version
          // 'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
          ...expoMetroWS.resolver.extraNodeModules,
          // ...extraNodeModules,
        },
        {
          get: (target, name) => {
            // console.log('nananan', name);
            //redirects dependencies referenced from common/ to local node_modules
            return name in target
              ? target[name]
              : path.join(process.cwd(), `node_modules/${name}`);
            // return (name in target ? target[name] : path.join(process.cwd(), `../../node_modules/${name}`));
          },
        }
      ),
      // useWatchman: false,
      assetExts: expoMetroWS.resolver.assetExts.filter(ext => ext !== "svg"),
      // sourceExts,

    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      ...expoMetroWS.transformer,
      // babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
  };

  console.log('final metro config', rtn);

  return rtn;
}

module.exports = getConfig(__dirname);
