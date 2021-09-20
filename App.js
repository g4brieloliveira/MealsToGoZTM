import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsContextProvider } from "./src/services/restaurantServices/restaurants-context";
import { LocationContextProvider } from "./src/services/location/location-context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites-context";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";
import { Navigation } from "./src/infrastucture/navigation";

import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import {
  useFonts as useRajdhani,
  Rajdhani_400Regular,
} from "@expo-google-fonts/rajdhani";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });

  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  const [rajdhaniLoaded] = useRajdhani({ Rajdhani_400Regular });

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });

  if (!interLoaded || !poppinsLoaded || !rajdhaniLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
