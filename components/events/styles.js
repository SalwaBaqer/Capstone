import styled from "styled-components/native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

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
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: #f8edeb;
  width: 100%;
  flex: 1;
`;

export const Dotsiconstyled = styled(MaterialCommunityIcons)`
  margin-left: 90%;
  margin-top: 1%;
`;

export const MaterialIconstyled = styled(MaterialIcons)`
  margin-left: 90%;
  margin-top: 1%;
`;

export const TextStyled = styled.Text`
  margin-left: 86%;
  margin-top: 1%;
`;
