import styled from "styled-components";
import { Button } from "react-native-paper";
import { colors } from "../../../../infrastucture/theme/colors";

export const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  contentStyle: {
    padding: 4,
  },

  color: colors.brand.primary,
})`
  margin-bottom: ${(props) => props.theme.space[2]};
  border: 1px solid ${(props) => props.theme.colors.brand.primary};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.brand.primary};

  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const WatermelonWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 3px;
  padding: ${(props) => props.theme.space[2]};
`;
