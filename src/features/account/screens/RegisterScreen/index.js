import React, { useState, useContext } from "react";

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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [newError, setNewError] = useState("");

  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    await onRegister(email, password, repeatedPassword);
    setNewError(error);

    error !== newError ? setVisible(true) : null;
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
          onChangeText={(text) => setPassword(text)}
        />
        <LoginInputs
          icon="lock-open-outline"
          label="Repita a Senha"
          mode="outlined"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        <LoginButton
          icon="account-plus"
          mode="outlined"
          loading={isLoading ? true : false}
          disabled={isLoading ? true : false}
          onPress={() => handleLogin()}
        >
          Registrar
        </LoginButton>
      </Container>
      {error !== newError ? (
        <Error duration={2500} visible={visible} onDismiss={onDismissSnackBar}>
          {error}
        </Error>
      ) : null}
    </AccountBackground>
  );
};
