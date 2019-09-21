import React from "react";
import { AppRegistry } from "react-native";
import { Provider as StoreProvider } from "react-redux";

import { name as appName } from "./app.json";
import store from "./store/configStore";
import RootNavigator from "./src/navigator/RootNavigator";
import NavigationService from "./src/navigator/NavigationService";

const RNRedux = () => {
  return (
    <StoreProvider store={store}>
        <RootNavigator ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
