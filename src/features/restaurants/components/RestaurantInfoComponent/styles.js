import styled from "styled-components";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
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
`;
