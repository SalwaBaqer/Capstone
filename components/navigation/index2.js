//Libraries
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Styles
import { theme } from "../../styles";

//Components
import AddNewEventScreen from "../events/AddNewEventScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";
import ExploreStackScreen from "../Stacks/ExploreStackScreen";
import ActivityStackScreen from "../Stacks/ActivityStackScreen";
import TimelineStackScreen from "../Stacks/TimelineStackScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Explore") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Timeline") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "AddNewEventScreen") {
            iconName = focused ? "add" : "add";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else iconName = focused ? "notifications" : "notifications-outline";

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.Maincolor,
        inactiveTintColor: theme.grey,
        labelStyle: {
          color: theme.blackish,
        },
      }}
    >
      <Tab.Screen name="Timeline" component={TimelineStackScreen} />
      <Tab.Screen name="Explore" component={ExploreStackScreen} />
      <Tab.Screen
        name="AddNewEventScreen"
        component={AddNewEventScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen name="Activity" component={ActivityStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
