import React, { useState, useContext } from "react";
import { IconButton, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
} from "../../components/account-styles";

import {
  Container,
  LoginInputs,
  LoginButton,
  Error,
  BackButton,
} from "./styles";

import { AuthenticationContext } from "../../../../services/authentication/authentication-context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    await onLogin(email, password);

    setVisible(true);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Container>
        <BackButton
          icon="arrow-left"
          onPress={() => navigation.navigate("Main")}
        />
        <LoginInputs
          label="Email"
          mode="outlined"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <LoginInputs
          icon="lock-open-outline"
          label="Senha"
          mode="outlined"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(text) => setPassword(text)}
        />
        <LoginButton
          icon="lock-open-outline"
          mode="outlined"
          loading={isLoading ? true : false}
          disabled={isLoading ? true : false}
          onPress={() => handleLogin()}
        >
          Fazer login
        </LoginButton>
      </Container>
      {error && (
        <Error duration={2500} visible={visible} onDismiss={onDismissSnackBar}>
          {error}
        </Error>
      )}
    </AccountBackground>
  );
};
