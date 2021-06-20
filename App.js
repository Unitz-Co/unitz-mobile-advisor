import React from 'react';

/* polyfills */
/** URL polyfill */
import 'react-native-url-polyfill/auto';

// load native config
import '@vl/mod-config/native';

// import 'react-native-gesture-handler';
import 'expo-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Providers from '@uz/components/Providers';
import StyleManager from '@vl/gstyles/StyleManager';
import ContentProvider from '@uz/unitz-providers/ContentfulProvider';
import AuthProvider from '@uz/unitz-providers/AuthProvider';
import AdvisorProvider from '@uz/unitz-providers/AdvisorProvider';
import PresenceProvider from '@uz/unitz-providers/PresenceProvider';
import LayoutProvider from '@uz/unitz-providers/LayoutProvider';
import RefProvider from '@uz/unitz-providers/RefProvider';
import PNProvider from '@uz/unitz-providers/PNProvider';
import { LoadableProvider } from '@uz/components/Loadable';
import I18nProvider from '@uz/unitz-providers/I18nProvider';
import TestProvider from '@uz/unitz-providers/TestProvider';
import ValidateProvider from '@uz/unitz-providers/ValidateProvider';

import AlertProvider from '@uz/unitz-providers/AlertProvider';
import NSApp from '@uz/unitz-app-advisor';

import CodePushProvider from '@uz/unitz-providers/CodePushProvider';

const App = CodePushProvider(
  () => (
    <Providers
      providers={[
        RefProvider,
        TestProvider,
        ValidateProvider,
        I18nProvider,
        LoadableProvider,
        AuthProvider,
        PresenceProvider,
        PNProvider,
        ContentProvider,
        StyleManager,
        SafeAreaProvider,
        LayoutProvider,
        AdvisorProvider,
        AlertProvider,
      ]}
    >
      <NSApp />
    </Providers>
  ),
  `${process.env.JSBUNDLE_NUMBER || ''}`
);

export default App;
