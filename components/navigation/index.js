import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//bottom tab navigation
import MyTabs from "./index2";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
