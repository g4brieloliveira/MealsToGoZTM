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
      <ListView
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};
