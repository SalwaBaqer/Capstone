import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import friendStore from "../../stores/friendStore";
import authStore from "../../stores/authStore";

//components
import ActivityItem from "./ActivityItem";

//native
import { ScrollView } from "react-native-gesture-handler";
import { List, Text } from "native-base";

const ActivityList = ({ navigation }) => {
  return <ScrollView></ScrollView>;
};

export default observer(ActivityList);
