import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartNavigator from "./StartNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Start: StartNavigator
  })
);
