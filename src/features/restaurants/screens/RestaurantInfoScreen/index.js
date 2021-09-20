import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../../components/RestaurantInfoComponent";
import { RestaurantsContext } from "../../../../services/restaurantServices/restaurants-context";
import { FavouritesContext } from "../../../../services/favourites/favourites-context";

import { Container, ListView, IsLoadingView } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { Search } from "../../components/SearchComponent";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <Container>
      <Search />
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
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </Container>
  );
};
