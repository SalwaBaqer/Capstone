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

//Profile
export const ProfileWrapper = styled.View`
  margin-top: 50px;
`;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
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

export const ProfileBio = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-weight: bold;
  font-size: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

//Edit Button
export const EditProfileButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
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
