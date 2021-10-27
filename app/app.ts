/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { svelteNative } from "svelte-native";
import Home from  "./views/main.svelte";
import Theme from "@nativescript/theme";

Theme.setMode(Theme.Light);

svelteNative(Home as typeof SvelteComponent, {});

