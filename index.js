/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import StorybookApp from "./storybook";

const STORYBOOK = true;

AppRegistry.registerComponent(appName, () => (STORYBOOK ? StorybookApp : App));
