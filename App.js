import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantInfoScreen";

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

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurantes") {
                  iconName = focused
                    ? "md-restaurant"
                    : "md-restaurant-outline";
                } else if (route.name === "Mapa") {
                  iconName = focused ? "md-map" : "md-map-outline";
                } else if (route.name === "Configurações") {
                  iconName = focused ? "md-settings" : "md-settings-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Restaurantes"
              component={RestaurantsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Mapa"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Configurações"
              component={SettingsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
