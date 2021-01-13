import styled from "styled-components/native";
import { Icon, Button } from "native-base";

export const theme = {
  Maincolor: "#FF5A5F", // redish main font color
  backgroundColor: "#f5fffa", // white main background color
  black: "black",
  blackish: "#484848",
  grey: "#767676",
  blueish: "#00A699",
};

//MySchedule
export const AgendaStyled = styled.View`
  flex: 1;
`;

export const RednerItemButton = styled.TouchableOpacity`
  margin-right: 10;
  margin-top: 17;
`;

export const RenderItemStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RenderItemImageStyled = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 40px;
`;

export const RenderEmptyDateStyled = styled.View`
  height: 15px;
  flex: 1;
  padding-top: 30px;
`;

//Profile
export const ProfileWrapper = styled.View`
  margin-top: 50px;
`;

export const ProfileImage = styled.Image`
  width: 175px;
  height: 175px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;

export const ProfileUsernameStyled = styled.Text`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

export const NumberOfFriendsStyled = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-weight: bold;
  font-size: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

export const ProfileBio = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-weight: bold;
  font-size: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

//Buttons
export const EditProfileButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const SignOutButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
  margin-right: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

//Signin && Signup Styling
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.blackish};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.blackish};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.blackish};
  border-bottom-color: ${({ theme }) => theme.blackish};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.Maincolor};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: ${({ theme }) => theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${({ theme }) => theme.blackish};
  margin-top: 15px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
