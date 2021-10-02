import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RegisterScreen } from "../../features/account/screens/RegisterScreen";
import { LoginScreen } from "../../features/account/screens/LoginScreen";
import { AccountScreen } from "../../features/account/screens/AccountScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
