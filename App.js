
import * as React from 'react';
// import 'react-native-gesture-handler';
import 'expo-splash-screen';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import Providers from '@uz/components/Providers';
import StyleManager from '@vl/gstyles/StyleManager';
import ContentProvider from '@uz/components/ContentfulProvider';
import AuthProvider from '@uz/components/AuthProvider';
import LayoutProvider from '@uz/components/LayoutProvider';
import { LoadableProvider } from '@uz/components/Loadable';
import I18nProvider from '@uz/mod-translations/Provider';
// import IAPProvider from '@na/components/IAPProvider';

import NSApp from "@uz/unitz-app";


const App = () => (
  <Providers providers={[
    I18nProvider,
    LoadableProvider,
    AuthProvider,
    ContentProvider,
    StyleManager,
    SafeAreaProvider,
    LayoutProvider,
  ]}>
    <NSApp />
  </Providers>
);

export default App;
