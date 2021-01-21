import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { EditProfileButtonStyled } from "../../styles";

const EditProfileButton = () => {
  const navigation = useNavigation();

  return (
    <EditProfileButtonStyled
      type="MaterialCommunityIcons"
      name="account-edit-outline"
      onPress={() => navigation.navigate("EditProfile", {})}
    />
  );
};

export default EditProfileButton;
