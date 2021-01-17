import React, { useState } from "react";
import { Button } from "react-native-paper";
import Heart from "react-native-vector-icons/AntDesign";
import Hearto from "react-native-vector-icons/AntDesign";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  // CONDITION: default unlike if pressed switch to like
  return (
    <>
      <Button onPress={alert}>
        <Heart></Heart>
      </Button>
      <Button onPress={alert}>
        <Hearto></Hearto>
      </Button>
    </>
  );
};

export default LikeButton;
