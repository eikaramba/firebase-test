import { NativeScriptConfig } from '@nativescript/core';

export default {
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    id: "com.nativescript.firebasetest.android"
  }
} as NativeScriptConfig;