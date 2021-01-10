import React from "react";
import { observer } from "mobx-react";

//Store
import authStore from "../../stores/authStore";

//Styles
import { SignOutButtonStyled } from "../../styles";

const SignoutButton = ({ navigation }) => {
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Signin");
  };

  return (
    authStore.user && (
      <SignOutButtonStyled
        type="AntDesign"
        name="logout"
        onPress={handleSubmit}
      />
    )
  );
};

export default observer(SignoutButton);
