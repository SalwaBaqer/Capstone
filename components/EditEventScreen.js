//react
import { View } from "native-base";
import React, { useState } from "react";

//react-native
import { Switch } from "react-native";

//dropdown menu
import DropDownPicker from "react-native-dropdown-picker";

//stores
import eventStore from "../stores/eventStore";

//styles
import {
  InputField,
  ButtonStyled,
  TextButtonStyled,
  LabelStyled,
} from "./styles";

const EditEventScreen = ({ navigation, route }) => {
  //event state
  const oldevent = {
    label: "event.label",
    date: "event.date",
    image: "event.image",
    name: "event.name",
    IsPrivate: true,
    tag: "event.tag",
  };
  const [event, setEvent] = useState({
    label: oldevent.label,
    date: oldevent.date,
    image: oldevent.image,
    name: oldevent.name,
    IsPrivate: oldevent.IsPrivate,
    tag: oldevent.tag,
  });

  //toggle switch state
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setEvent({ ...event, IsPrivate: isEnabled });
  };

  //handle edit
  const handleEdit = () => {
    eventStore.editEvent(event);
  };
  return (
    <View>
      <LabelStyled>Private</LabelStyled>
      <Switch
        trackColor={{ false: "#767577", true: "#3492eb" }}
        thumbColor={event.IsPrivate ? "#f0f7fc" : "#f4f3f4"}
        value={event.IsPrivate}
        onValueChange={toggleSwitch}
      />

      <LabelStyled>Title</LabelStyled>
      <InputField
        autoCapitalize="none"
        multiline="true"
        value={event.name}
        onChangeText={(value) => setEvent({ ...event, name: value })}
      />

      <LabelStyled>Label</LabelStyled>
      <DropDownPicker
        items={[
          { label: "Exercise", value: "Exercise" },
          { label: "Fun", value: "Fun" },
          { label: "Food", value: "Food" },
          { label: "Social", value: "Social" },
          { label: "Madetation", value: "Madetation" },
          { label: "Therapy", value: "Therapy" },
          { label: "Travel", value: "Travel" },
          { label: "Technology", value: "Technology" },
          { label: "Work", value: "Work" },
        ]}
        defaultValue={event.label}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => setEvent({ ...event, label: item.value })}
      />

      <LabelStyled>Date</LabelStyled>
      <InputField
        autoCapitalize="none"
        onChangeText={(value) => setEvent({ ...event, date: value })}
      />

      <LabelStyled>Tag</LabelStyled>
      <InputField
        autoCapitalize="none"
        value={event.tag}
        onChangeText={(value) => setEvent({ ...event, tag: value })}
      />

      <LabelStyled>Image</LabelStyled>
      <InputField
        autoCapitalize="none"
        onChangeText={(value) => setEvent({ ...event, image: value })}
      />

      <ButtonStyled>
        <TextButtonStyled onPress={handleEdit}>Edit</TextButtonStyled>
      </ButtonStyled>
    </View>
  );
};

export default EditEventScreen;
