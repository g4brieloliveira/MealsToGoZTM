import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";

import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantInfoScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
