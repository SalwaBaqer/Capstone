import React from "react";

import { Title } from "react-native-paper";
import { Image } from "react-native";

// mobx
import { observer } from "mobx-react";
import { DetailWrapper } from "./styles";

//style
import { IoniconstyledLeft } from "./styles";
import { theme } from "../../styles";

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <DetailWrapper>
      {event.image ? (
        <Image
          source={{ uri: event.image }}
          style={{
            width: 400,
            height: 400,
            marginBottom: 20,
          }}
        />
      ) : (
        <></>
      )}

      <Title>
        <Title
          style={{ fontWeight: "bold", fontSize: 22, color: theme.blackish }}
        >
          Title {"  "}
        </Title>
        {event.name}
      </Title>
      <Title>
        {" "}
        <Title
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: theme.blackish,
          }}
        >
          Label {"  "}
        </Title>
        {event.label}
      </Title>
      {event.tag ? (
        <>
          <Title>
            <IoniconstyledLeft
              name="people"
              size={30}
              color={theme.blueish}
              onPress={() => handleEdit(item)}
            />
            {"   "}
            with @{event.tag}
          </Title>
        </>
      ) : (
        <></>
      )}
    </DetailWrapper>
  );
};

export default observer(EventDetailScreen);
