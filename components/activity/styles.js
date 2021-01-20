import styled from "styled-components/native";
import { theme } from "../../styles";

export const ButtonStyledAccept = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.blueish};
  border-radius: 4px;
  width: 80px;
  padding-vertical: 12px;
  padding-horizontal: 6px;
`;

export const ButtonStyledDetails = styled.TouchableOpacity`
  margin-left: 9%;
  align-items: center;
  background-color: ${theme.blueish};
  border-radius: 4px;
  width: 120px;
  padding-vertical: 10px;
  padding-horizontal: 6px;
`;

export const ButtonStyledDecline = styled.TouchableOpacity`
  margin-right: 2%;
  margin-left: 2%;
  align-items: center;
  background-color: ${theme.redish};
  border-radius: 4px;
  width: 80px;
  padding-vertical: 12px;
  padding-horizontal: 6px;
`;
