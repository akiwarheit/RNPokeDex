import Reactotron from "reactotron-react-native";
import sagaPlugin from "reactotron-redux-saga";

// @ts-ignore
Reactotron.configure()
  // @ts-ignore
  .use(sagaPlugin())
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/
    }
  })
  .connect();
