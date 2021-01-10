//Libraries
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

//Stores
import profileStore from "../stores/profileStore";

//Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
} from "../styles";

const EditProfile = ({ navigation, route }) => {
  const [profile, setProfile] = useState({
    image: route.params?.oldProfile.image,
    username: route.params?.oldProfile.username,
    bio: route.params?.oldProfile.bio,
  });
  console.log(route.params);

  const handleSubmit = async () => {
    await profileStore.updateProfile(profile);
    navigation.navigate("ProfileScreen");
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);

      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setProfile({
        ...profile,
        image: { uri: localUri, name: filename, type },
      });
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <AuthTextInput
        onChangeText={(bio) => setProfile({ ...profile, bio })}
        value={profile.bio}
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {profile.image && (
        <Image
          source={{ uri: profile.image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Done</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(EditProfile);
