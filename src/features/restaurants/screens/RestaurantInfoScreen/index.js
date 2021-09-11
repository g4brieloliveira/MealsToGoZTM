import React, { useContext } from "react";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../../components/RestaurantInfoComponent";
import { RestaurantsContext } from "../../../../services/restaurantServices/restaurants-context";

import { Container, ListView, SearchView, IsLoadingView } from "./styles";
import { Text } from "react-native";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <Container>
      <SearchView>
        <Searchbar placeholder="Pesquise restaurantes aqui..." />
      </SearchView>
      {isLoading ? (
        <IsLoadingView>
          <ActivityIndicator animating={true} size={50} />
        </IsLoadingView>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <ListView
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </Container>
  );
};
