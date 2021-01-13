//Libraries
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import { Text } from "native-base";
import { observer } from "mobx-react";

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
} from "../styles";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const MySchedule = () => {
  const [items, setItems] = useState({});

  //Just signed in user events display
  const loadItems = (day) => {
    const profileEvents = eventStore.events.filter(
      (event) => event.userId === authStore.user.id
    );
    const events = profileEvents.filter(
      (event) => event.date.split("T")[0] === day.dateString
    );
    console.log("day", day);
    console.log(" day datestring", day.dateString);

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
      <RednerItemButton>
        <Card>
          <Card.Content>
            <RenderItemStyled>
              <Text>{item.name}</Text>
              <Text>{item.label}</Text>
              <RenderItemImageStyled source={{ uri: item.image }} />
              <Text>{authStore.user.username}</Text>
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
