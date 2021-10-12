import styled from "styled-components";
import { StatusBar as RNStatusBar } from "react-native";
import { Snackbar } from "react-native-paper";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${RNStatusBar.currentHeight}px;
`;

export const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListView = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
`;

export const IsLoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;

export const Success = styled(Snackbar)`
  background-color: #0f0;
`;
