import React from "react";
import { Text, View } from "react-native";

const UsernameItem = ({ user }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>@{user.username}</Text>
    </View>
  );
};

export default UsernameItem;
