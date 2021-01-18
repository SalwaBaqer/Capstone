import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
// import DemoMultiSelect from "../authentication/DemoMultiSelect";
// import MultiSelectUsernames from "../authentication/MutliSelectUsernames";

//navigation
import MyTabs from "./index2";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">
      {/* <Screen
        name="MultiSelectUsernames"
        component={MultiSelectUsernames}
        // options={{ headerShown: false }}
      /> */}
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
