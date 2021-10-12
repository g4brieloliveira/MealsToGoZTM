import React, { useContext } from "react";
import { AuthenticationContext } from "../../../../services/authentication/authentication-context";
import { Button, View } from "react-native";
import { List } from "react-native-paper";

import { Container } from "./styles";

export function SettingsScreen({ navigation }) {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <Container>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favoritos"
          description="Acessar seus restaurantes favoritos"
          left={(props) => <List.Icon {...props} color="black" icon="star" />}
          onPress={navigation.navigate("Favourites")}
        />

        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          description="Sair desta conta"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />

        <List.Item />
      </List.Section>
    </Container>
  );
}
