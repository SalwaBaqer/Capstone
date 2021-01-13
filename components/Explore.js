//Libraries
import React, { useState } from "react";
import { List, View } from "native-base";
import { Text } from "react-native"; // unused import
import { SearchBar } from "react-native-elements";
//Stores
import authStore from "../stores/authStore";

//Components
import UsernameItem from "./UsernameItem";
import ExploreEvents from "./events/ExploreEvents";

const Explore = ({ navigation }) => {
  const [search, updateSearch] = useState("");

  const filteredUsernames = authStore.users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const usernameList = filteredUsernames.map((user) => (
    <UsernameItem user={user} key={user.id} />
  ));
  return (
    <>
      <SearchBar
        placeholder="Search for user..."
        returnKeyType="search"
        onChangeText={updateSearch}
        value={search}
        style={{ backgroundColor: "white", color: "black" }}
      />
      {search !== "" ? (
        <View>
          <List>{usernameList}</List>
        </View>
      ) : (
        <ExploreEvents navigation={navigation} />
      )}
    </>
  );
};

export default Explore;
