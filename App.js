import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";
import * as firebase from "firebase";
require("firebase/auth");

import { Navigation } from "./src/infrastucture/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDool9gZNOSmyEOTVg_GHRlMK-bGpJjDpI",
  authDomain: "mealstogo-5fcb8.firebaseapp.com",
  projectId: "mealstogo-5fcb8",
  storageBucket: "mealstogo-5fcb8.appspot.com",
  messagingSenderId: "746766000569",
  appId: "1:746766000569:web:14c202a638a5de1c5ed668",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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

import { AuthenticationContextProvider } from "./src/services/authentication/authentication-context";

export default function App() {
  const [interLoaded] = useInter({ Inter_400Regular });
  const [rajdhaniLoaded] = useRajdhani({ Rajdhani_400Regular });
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });
  if (!interLoaded || !poppinsLoaded || !rajdhaniLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
