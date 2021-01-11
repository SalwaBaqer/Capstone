//Libraries
import React from "react";

//Components
import SearchBar from "./SearchBar";
import ExploreEvents from "./events/ExploreEvents";

const Explore = ({ navigation }) => {
  return (
    <>
      <SearchBar />
      <ExploreEvents navigation={navigation} />
    </>
  );
};

export default Explore;
