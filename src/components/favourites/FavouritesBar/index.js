import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../../restaurant/RestaurantCallout";
import { Container, Title, Item } from "./styles";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <Container>
      <Title>Favoritos</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Item key={key}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantsDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Item>
          );
        })}
      </ScrollView>
    </Container>
  );
};
