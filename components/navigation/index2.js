//Libraries
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Styles
import { theme } from "../../styles";

//Components
// import createTrip from "../createTrip";
// import ExplorerStackScreen from "../Stacks/ExplorerStackScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Explorer") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "createTrip") {
            iconName = focused ? "add" : "add";
          } else iconName = focused ? "person" : "person-outline";

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
      {/* <Tab.Screen name="Explorer" />
      <Tab.Screen name="createTrip" options={{ tabBarLabel: () => null }} /> */}
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
