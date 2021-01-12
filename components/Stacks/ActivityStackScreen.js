//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Activity from "../Activity";

const ActivityStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="ActivityScreen"
        component={Activity}
        // options={{ headerShown: false }}
      />
    </ActivityStack.Navigator>
  );
};

export default ActivityStackScreen;
