//react
import { View } from "native-base";
import React, { useState, useEffect } from "react";

//react-native
import { Switch } from "react-native";

//dropdown menu
import DropDownPicker from "react-native-dropdown-picker";

//Calendar
import { Calendar } from "react-native-calendars";

//image picker
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

//stores
import eventStore from "../../stores/eventStore";

//styles
import {
  InputField,
  ButtonStyled,
  TextButtonStyled,
  LabelStyled,
} from "../styles";

const EditEventScreen = ({ navigation, route }) => {
  //event state

  const { oldEvent } = route.params;
  const [event, setEvent] = useState(oldEvent);

  //toggle switch state
  const [isEnabled, setIsEnabled] = useState(event.isPrivate);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setEvent({ ...event, IsPrivate: isEnabled });
  };

  //handle edit
  const handleEdit = () => {
    eventStore.editEvent(event);
    navigation.navigate("ProfileScreen");
  };

  //image picker handling
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);

      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setEvent({
        ...event,
        image: { uri: localUri, name: filename, type },
      });
    }
  };
  return (
    <View
      style={{ marginTop: 2, marginRight: 20, marginLeft: 20, marginBottom: 2 }}
    >
      <LabelStyled>Private</LabelStyled>

      <Switch
        trackColor={{ false: "#767577", true: "#3492eb" }}
        thumbColor={event.IsPrivate ? "#f0f7fc" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={event.isPrivate}
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
      <Calendar
        minDate={"2021-01-01"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2021-12-31"}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(value) => {
          setEvent({
            ...event,
            date: value.dateString, //***it was value but i added .dateString cuz of BE datatype issue*** BY SAlWA
          }),
            console.log("selected day", value);
        }}
        markedDates={{
          "2021-01-16": { selected: true, marked: true, selectedColor: "blue" },
          "2021-01-17": { marked: true },
          "2021-01-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2021-01-19": { disabled: true, disableTouchEvent: true },
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log("selected long press day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"MMM d, yyyy"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 300,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "red",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "HelveticaNeue-Medium",
          textMonthFontFamily: "HelveticaNeue-Medium",
          textDayHeaderFontFamily: "HelveticaNeue-Medium",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <LabelStyled>Tag</LabelStyled>
      <InputField
        autoCapitalize="none"
        // value={event.tag}
        onChangeText={(value) => setEvent({ ...event, tag: value })}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Image
        source={{ uri: event.image.uri }}
        style={{ width: 20, height: 20 }}
      />
      <ButtonStyled>
        <TextButtonStyled onPress={handleEdit}>Edit</TextButtonStyled>
      </ButtonStyled>
    </View>
  );
};

export default EditEventScreen;
