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
import AppConfigProvider from '@uz/unitz-providers/AppConfigProvider';
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
import MessageProvider from '@uz/unitz-providers/MessageProvider';
import LoadingProvider from '@uz/unitz-providers/LoadingProvider';

import CodePushProvider from '@uz/unitz-providers/CodePushProvider';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://2587155cf3c9458294bd1a6b093b570c@o946942.ingest.sentry.io/5896107',
});

const App = CodePushProvider(
  () => (
    <Providers
      providers={[
        RefProvider,
        AppConfigProvider,
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
        MessageProvider,
        LoadingProvider,
      ]}
    >
      <NSApp />
    </Providers>
  ),
  `${process.env.JSBUNDLE_NUMBER}`
);

export default App;
