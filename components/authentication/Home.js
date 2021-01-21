import React from "react";
import { View } from "react-native";
import { Container, SplashImageStyled, SplashDescription } from "../../styles";
// import Kalendar from "../media/Kalendar.png";

const Home = () => {
  return (
    <Container>
      <View>
        <SplashImageStyled source={require("../media/Kalendar.png")} />
      </View>
      <View>
        <SplashDescription>Schedule Share Connect</SplashDescription>
      </View>
    </Container>
  );
};

export default Home;
