//Libraries
import React, { useState } from "react";
import { List, View } from "native-base";
import { Text } from "react-native";
import { SearchBar } from "react-native-elements";
//Stores
import authStore from "../stores/authStore";
import eventStore from "../stores/eventStore";

//Components
import UsernameItem from "./UsernameItem";
import ExploreEvents from "./events/ExploreEvents";
import MySchedule from "./MySchedule";

const Explore = ({ navigation }) => {
  const [search, updateSearch] = useState("");

  const filteredUsernames = authStore.users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const usernameList = filteredUsernames.map((user) => (
    <UsernameItem user={user} key={user.id} />
  ));

  const exploreEvents = eventStore.events.filter(
    (event) => event.userId !== authStore.user.id && !event.isPrivate
  );

  const sideBar = true;

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
        <MySchedule
          navigation={navigation}
          exploreEvents={exploreEvents}
          sideBar={sideBar}
        />
      )}
    </>
  );
};

export default Explore;
