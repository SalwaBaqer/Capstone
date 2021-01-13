//Libraries
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import { Text, Right, ListItem, Left } from "native-base";
import { observer } from "mobx-react";
//react-native
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";

//Stores
import authStore from "../stores/authStore";
import eventStore from "../stores/eventStore";

//styles
import {
  AgendaStyled,
  RednerItemButton,
  RenderItemStyled,
  RenderItemImageStyled,
  RenderEmptyDateStyled,
  Dotsiconstyled,
  MaterialIconstyled,
  TextStyled,
} from "../styles";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const MySchedule = ({ navigation }) => {
  const [items, setItems] = useState({});
  const [menu, setMenu] = useState(true);

  const handleEdit = () => {
    setMenu(true);
    navigation.navigate("EditEventScreen", { oldEvent: item });
  };

  const handleDelete = () => {
    setMenu(true);
    eventStore.deleteEvent(item.id);
  };

  //Just signed in user events display
  const loadItems = (day) => {
    const profileEvents = eventStore.events.filter(
      (event) => event.userId === authStore.user.id
    );
    const events = profileEvents.filter(
      (event) => event.date.split("T")[0] === day.dateString
    );

    setTimeout(() => {
      for (let i = 0; i < events.length; i++) {
        const time = day.timestamp;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          for (let j = 0; j < events.length; j++) {
            items[strTime].push({
              name: events[j].name,
              label: events[j].label,
              image: events[j].image,
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
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <RednerItemButton
        onPress={() =>
          navigation.navigate("EventDetailScreen", { event: item })
        }
      >
        <Card>
          <Card.Content>
            <RenderItemStyled>
              <Text style={{ marginRight: 15 }}>{item.name}</Text>
              <Text>{item.label}</Text>
              <RenderItemImageStyled source={{ uri: item.image }} />
              <Text>{authStore.user.username}</Text>
              {menu ? (
                <Dotsiconstyled
                  name="dots-horizontal"
                  size={24}
                  color="gray"
                  onPress={() => setMenu(false)}
                />
              ) : (
                <Right>
                  <TextStyled onPress={() => setMenu(true)}>Cancel</TextStyled>
                  <MaterialIconstyled
                    name="edit"
                    size={24}
                    color="blue"
                    onPress={handleEdit}
                  />
                  <MaterialIconstyled
                    name="delete"
                    size={24}
                    color="red"
                    onPress={handleDelete}
                  />
                </Right>
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

export default observer(MySchedule);
