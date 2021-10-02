import React from "react";

import {
  AccountBackground,
  AccountCover,
} from "../../components/account-styles";

import { Container, AuthButton, Title } from "./styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Container>
        <Title>Meals To Go</Title>
        <AuthButton
          icon="lock-open-outline"
          mode="outlined"
          onPress={() => navigation.navigate("Login")}
        >
          Fazer login
        </AuthButton>
        <AuthButton
          icon="account-plus"
          mode="outlined"
          onPress={() => navigation.navigate("Register")}
        >
          Criar nova conta
        </AuthButton>
      </Container>
    </AccountBackground>
  );
};
