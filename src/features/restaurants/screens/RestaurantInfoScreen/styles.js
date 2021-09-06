import styled from "styled-components";
import { StatusBar as RNStatusBar } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${RNStatusBar.currentHeight}px;
`;

export const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
