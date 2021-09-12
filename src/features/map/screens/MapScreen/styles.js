import styled from "styled-components";
import MapView from "react-native-maps";
import { StatusBar as RNStatusBar } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${RNStatusBar.currentHeight}px;
`;

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`;
