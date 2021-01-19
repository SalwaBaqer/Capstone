//Libraries
import React, { useState } from "react";
import { List, View, Spinner } from "native-base";
import { observer } from "mobx-react";
import { SearchBar } from "react-native-elements";
//Stores
import authStore from "../../stores/authStore";
import eventStore from "../../stores/eventStore";

//Components
import UsernameItem from "./UsernameItem";
import Schedule from "../Schedule";

const Explore = ({ navigation }) => {
  const [search, updateSearch] = useState("");

  if (!authStore.user) return <Spinner />;
  if (eventStore.loading) return <Spinner />;

  const filteredUsernames = authStore.users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const usernameList = filteredUsernames.map((user) => (
    <UsernameItem user={user} key={user.id} />
  ));

  const exploreEvents = eventStore.events.filter(
    (event) => event.userId !== authStore.user.id && !event.isPrivate
  );

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
        <Schedule navigation={navigation} exploreEvents={exploreEvents} />
      )}
    </>
  );
};

export default observer(Explore);
