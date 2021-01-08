//react
import { Label, View } from "native-base";
import React, { useState } from "react";

//react-native
import { Text, Picker } from "react-native";

//stores
import eventStore from "../stores/eventStore";

//styles
import { InputField, ButtonStyled, TextButtonStyled } from "./styles";

const AddNewEventScreen = () => {
  const [event, setEvent] = useState({
    name: "",
    label: "",
    date: "",
    image: "",
    IsPrivate: "true",
    tag: "",
  });
  return (
    <View>
      <Text>Add new Event:</Text>
      <Label>Title</Label>
      <InputField autoCapitalize="none" multiline="true" />

      <Label>Label</Label>
      <View>
        <Picker
          selectedValue={event.label}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setEvent(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      {/* <Label>Date</Label>
      <InputField autoCapitalize="none" multiline="true" />

      <Label>Tag</Label>
      <InputField autoCapitalize="none" multiline="true" />

      <Label>Private</Label>
      <InputField autoCapitalize="none" multiline="true" /> */}
      <ButtonStyled>
        <TextButtonStyled>Add</TextButtonStyled>
      </ButtonStyled>
    </View>
  );
};

export default AddNewEventScreen;
