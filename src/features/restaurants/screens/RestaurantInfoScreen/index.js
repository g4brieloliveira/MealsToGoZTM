import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../../components/RestaurantInfoComponent";

import { Container, ListView, SearchView } from "./styles";

export const RestaurantsScreen = () => {
  return (
    <Container>
      <SearchView>
        <Searchbar placeholder="Pesquise restaurantes aqui..." />
      </SearchView>
      <ListView>
        <RestaurantInfo />
      </ListView>
    </Container>
  );
};
