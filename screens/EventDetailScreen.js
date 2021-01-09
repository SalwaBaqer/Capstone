import { View } from "native-base";
import { Title } from "react-native-paper";

const EventDetailScreen = (event) => {
  return (
    <View>
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>

      {/* if there is a tag and image display */}
      <Title>{event.image}</Title>
      <Title>{event.tag}</Title>
    </View>
  );
};

export default EventDetailScreen;
