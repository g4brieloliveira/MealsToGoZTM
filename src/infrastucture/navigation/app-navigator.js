import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./RestaurantsNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";
import { SettingsNavigator } from "./settings.navigator";

import { FavouritesContextProvider } from "../../services/favourites/favourites-context";
import { LocationContextProvider } from "../../services/location/location-context";
import { RestaurantsContextProvider } from "../../services/restaurantServices/restaurants-context";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
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
            component={SettingsNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
