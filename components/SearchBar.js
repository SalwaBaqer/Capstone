//Libraries
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";

//Stores
import authStore from "../stores/authStore";

//Components
import UsernameItem from "./UsernameItem";

const SearchPage = () => {
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
        onChangeText={updateSearch}
        value={search}
        style={{ backgroundColor: "white", color: "black" }}
        onSubmitEditing={navigation.navigate("SearchPage")}
      />
      {search !== "" && <List>{usernameList}</List>}
    </>
  );
};

export default SearchPage;
