import React from "react";
import { Text } from "react-native";

import { Title, CardView, CardImage, CardContent, Content } from "./styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurante X",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = "Rua X, numero XX",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <>
      <CardView elevation={5}>
        <CardImage source={{ uri: photos[0] }} />
        <CardContent>
          <Content>
            <Title>{name}</Title>
            <Text>{rating}</Text>
          </Content>

          <Content>
            <Text>{address}</Text>
            <Text>
              {isClosedTemporarily ? (
                "Fechado Temporariamente"
              ) : (
                <>{isOpenNow ? "Aberto" : "Fechado"}</>
              )}
            </Text>
          </Content>
        </CardContent>
      </CardView>
    </>
  );
};
