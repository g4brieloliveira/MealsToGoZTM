import styled from "styled-components";
import { Button, TextInput, Snackbar, IconButton } from "react-native-paper";
import { colors } from "../../../../infrastucture/theme/colors";

export const Container = styled.View`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin: ${(props) => props.theme.space[2]};
`;

export const LoginInputs = styled(TextInput).attrs({
  outlineColor: colors.brand.primary,
})`
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const LoginButton = styled(Button).attrs({
  contentStyle: {
    padding: 4,
  },

  color: colors.brand.primary,
})`
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
  border: 1px solid ${(props) => props.theme.colors.brand.primary};
`;

export const BackButton = styled(IconButton).attrs({
  color: colors.brand.primary,
})`
  margin-left: -${(props) => props.theme.space[2]};
`;

export const Error = styled(Snackbar)`
  background-color: #f00;
`;

export const Success = styled(Snackbar)`
  background-color: #0f0;
`;
