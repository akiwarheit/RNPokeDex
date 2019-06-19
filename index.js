/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import StorybookApp from "./storybook";
import Reactotron, { storybook } from "reactotron-react-native";

const STORYBOOK = true;

AppRegistry.registerComponent(appName, () => (STORYBOOK ? StorybookApp : App));
