import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MultiSelect from "react-native-multiple-select";

//stores
import authStore from "../../stores/authStore";
import UsernameItem from "./UsernameItem";

const usernameList = authStore.users.map((user) => (
  <UsernameItem user={user} key={user.id} />
));

console.log(usernameList);

const items = usernameList;

export default class App extends Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems }, () =>
      console.warn("Selected Items: ", selectedItems)
    );
  };

  render() {
    const { selectedItems } = this.state;
    return (
      <View>
        <View>
          <MultiSelect
            items={items}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#00000"
            selectedItemTextColor="#00000"
            selectedItemIconColor="#00000"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
            removeSelected
          />
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   multiSelectContainer: {
//     height: 400,
//     width: "80%",
//   },
// });
