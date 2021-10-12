import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
} from "../../components/account-styles";

import { Container, AuthButton, Title, WatermelonWrapper } from "./styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <WatermelonWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../../assets/watermelon.json")}
        />
      </WatermelonWrapper>

      <Container>
        <Title>Meals To Go</Title>
        <AuthButton
          icon="login"
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
