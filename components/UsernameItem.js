import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-paper";

const UsernameItem = ({ user }) => {
  return (
    <TouchableOpacity>
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
