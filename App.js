import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Components
import RootNavigator from "./components/navigation";

//Styles
import { ThemeProvider } from "styled-components";
import { theme, Container } from "./styles";

export default function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Container>
  );
}
