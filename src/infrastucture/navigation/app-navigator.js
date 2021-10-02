import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { RestaurantsNavigator } from "./RestaurantsNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Restaurantes") {
          iconName = focused ? "md-restaurant" : "md-restaurant-outline";
        } else if (route.name === "Mapa") {
          iconName = focused ? "md-map" : "md-map-outline";
        } else if (route.name === "Configurações") {
          iconName = focused ? "md-settings" : "md-settings-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen
      name="Restaurantes"
      component={RestaurantsNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Mapa"
      component={MapScreen}
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
);
