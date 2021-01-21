//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Timeline from "../timeline/Timeline";
import TimelineProfile from "../timeline/TimelineProfile";
import EventDetailScreen from "../events/EventDetailScreen";
import HeaderLogo from "../HeaderLogo";

const TimelineStack = createStackNavigator();

const TimelineStackScreen = () => {
  return (
    <TimelineStack.Navigator>
      <TimelineStack.Screen
        name="TimelineScreen"
        component={Timeline}
        options={{
          headerTitle: <HeaderLogo />,
        }}
      />
      <TimelineStack.Screen
        name="TimelineProfileScreen"
        component={TimelineProfile}
        options={{
          headerTitle: <HeaderLogo />,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
      <TimelineStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerTitle: <HeaderLogo />,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
    </TimelineStack.Navigator>
  );
};

export default TimelineStackScreen;
