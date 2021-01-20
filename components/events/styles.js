import styled from "styled-components/native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

export const ItemWrapper = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-top: 2%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 0.5px;
  border-color: #bdbbbb;
  border-radius: 20px;
  background-color: white;
  width: 90%;
`;

export const DetailWrapper = styled.View`
  margin-top: 100px;
  margin-left: 13px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;

export const Dotsiconstyled = styled(MaterialCommunityIcons)`
  margin-left: 90%;
  margin-top: 1%;
`;

export const MaterialIconstyled = styled(MaterialIcons)`
  margin-left: 90%;
  margin-top: 1%;
`;
export const Ioniconstyled = styled(Ionicons)`
  margin-left: 90%;
  margin-top: 1%;
`;
export const AntDesignstyled = styled(AntDesign)`
  margin-left: 90%;
  margin-top: 1%;
`;

export const TextStyled = styled.Text`
  margin-left: 86%;
  margin-top: 1%;
`;

export const IoniconstyledLeft = styled(Ionicons)`
  margin-right: auto;
  margin-left: auto;
  margin-top: 1%;
  margin-bottom: 1%;
`;
