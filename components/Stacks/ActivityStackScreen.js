//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Activity from "../activity/Activity";
import HeaderLogo from "../HeaderLogo";

const ActivityStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="ActivityScreen"
        component={Activity}
        options={{
          headerTitle: <HeaderLogo />,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
    </ActivityStack.Navigator>
  );
};

export default ActivityStackScreen;
