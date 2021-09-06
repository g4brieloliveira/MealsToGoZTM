import styled from "styled-components";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Star = styled.Image`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
  margin-left: ${(props) => props.theme.space[1]};
`;

export const Rating = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  flex-direction: row;
`;

export const CardView = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardImage = styled(Card.Cover)``;

export const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[1]};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const Closed = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.error};
  text-transform: uppercase;
  padding: ${(props) => props.theme.space[1]};
`;

export const ClosedView = styled.View`
  background-color: ${(props) => props.theme.colors.ui.error}33;
  border: 1px solid ${(props) => props.theme.colors.ui.error};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const Open = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.success};
  text-transform: uppercase;
  padding: ${(props) => props.theme.space[1]};
`;

export const OpenView = styled.View`
  background-color: ${(props) => props.theme.colors.ui.success}33;
  border: 1px solid ${(props) => props.theme.colors.ui.success};
  border-radius: ${(props) => props.theme.sizes[0]};
`;
