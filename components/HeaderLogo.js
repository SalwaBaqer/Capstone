import React from "react";
import { Image } from "react-native";

const HeaderLogo = () => {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require("../media/Kalendar.png")}
    />
  );
};

export default HeaderLogo;
