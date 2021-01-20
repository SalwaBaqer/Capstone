//Libraries
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, Right } from "native-base";
import { Card } from "react-native-paper";
import { Agenda } from "react-native-calendars";
import { observer } from "mobx-react";

//Stores
import eventStore from "../stores/eventStore";
import authStore from "../stores/authStore";

//styles
import {
  AgendaStyled,
  RednerItemButton,
  RenderItemStyled,
  RenderItemImageStyled,
  RenderItemNameStyled,
  RenderEmptyDateStyled,
  Dotsiconstyled,
  MaterialIconstyled,
  TextStyled,
} from "../styles";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Schedule = ({ navigation, exploreEvents, timeline, isExplore }) => {
  const [items, setItems] = useState({});
  const [menu, setMenu] = useState(true);

  const handleEdit = (item) => {
    setMenu(true);
    navigation.navigate("EditEventScreen", { oldEvent: item });
  };

  const handleDelete = (item) => {
    setMenu(true);
    eventStore.deleteEvent(item.id);
  };

  const loadItems = (day) => {
    const events = exploreEvents.filter(
      (event) => event.date.split("T")[0] === day.dateString
    );

    for (let i = 0; i < events.length; i++) {
      const time = day.timestamp;
      const strTime = timeToString(time);
      if (!items[strTime]) {
        items[strTime] = [];
        for (let j = 0; j < events.length; j++) {
          items[strTime].push({
            ...events[j],
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });
        }
      }
    }

    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });
    setItems(newItems);
  };

  const renderItem = (item) => {
    const itemUsername = authStore.getUserbyId(item.userId);

    return (
      <RednerItemButton
        onPress={() =>
          navigation.navigate("EventDetailScreen", { event: item })
        }
      >
        <Card>
          <Card.Content>
            <RenderItemStyled>
              <RenderItemNameStyled>{item.name}</RenderItemNameStyled>
              <RenderItemImageStyled source={{ uri: item.image }} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    timeline ? "TimelineProfileScreen" : "ExploreProfileScreen",
                    {
                      userId: item.userId,
                    }
                  )
                }
              >
                <Text>@{itemUsername.username}</Text>
              </TouchableOpacity>
              {!isExplore ? (
                menu ? (
                  <Dotsiconstyled
                    name="dots-horizontal"
                    size={24}
                    color="gray"
                    onPress={() => setMenu(false)}
                  />
                ) : (
                  <Right>
                    <TextStyled onPress={() => setMenu(true)}>
                      Cancel
                    </TextStyled>
                    <MaterialIconstyled
                      name="edit"
                      size={24}
                      color="blue"
                      onPress={() => handleEdit(item)}
                    />
                    <MaterialIconstyled
                      name="delete"
                      size={24}
                      color="red"
                      onPress={() => handleDelete(item)}
                    />
                  </Right>
                )
              ) : (
                <></>
              )}
            </RenderItemStyled>
          </Card.Content>
        </Card>
      </RednerItemButton>
    );
  };

  const renderEmptyDate = () => {
    return (
      <RenderEmptyDateStyled>
        <Text>This is an empty date!</Text>
      </RenderEmptyDateStyled>
    );
  };

  return (
    <AgendaStyled>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        pastScrollRange={1}
        futureScrollRange={13}
        minDate={"2021-01-01"}
        maxDate={"2021-12-31"}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
      />
    </AgendaStyled>
  );
};

export default observer(Schedule);
