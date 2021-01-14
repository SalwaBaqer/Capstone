import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const UsernameItem = ({ user }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ExploreProfileScreen", { user: user })
      }
    >
      <Card>
        <Card.Content>
          <View>
            <Text style={{ fontSize: 20 }}>@{user.username}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default UsernameItem;
