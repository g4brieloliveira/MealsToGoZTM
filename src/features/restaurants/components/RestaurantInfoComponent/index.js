import React from "react";
import star from "../../../../../assets/star.png";
import starEmpty from "../../../../../assets/star-empty.png";

import {
  Title,
  CardView,
  CardImage,
  CardContent,
  Content,
  Description,
  Rating,
  Star,
  Closed,
  ClosedView,
  Open,
  OpenView,
} from "./styles";
import { Favourite } from "../../../../components/favourites/FavouritesButton";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurante X",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = restaurant.vicinity,
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const ratingEmptyArray = Array.from(new Array(Math.ceil(5 - rating)));

  return (
    <>
      <CardView elevation={5}>
        <Favourite restaurant={restaurant} />
        <CardImage source={{ uri: photos[0] }} />
        <CardContent>
          <Content>
            <Title>{name}</Title>
            <Rating>
              <>
                {ratingArray.map((_, i) => (
                  <Star key={`star-${placeId}-${i}`} source={star} />
                ))}
                {ratingEmptyArray.map((_, i) => (
                  <Star key={`star-${placeId}-${i}`} source={starEmpty} />
                ))}
              </>
            </Rating>
          </Content>

          <Content>
            <Description>{address}</Description>
            <Content>
              {isClosedTemporarily ? (
                <ClosedView>
                  <Closed>Fechado Temporariamente</Closed>
                </ClosedView>
              ) : (
                <>
                  {isOpenNow ? (
                    <OpenView>
                      <Open>Aberto</Open>
                    </OpenView>
                  ) : (
                    <ClosedView>
                      <Closed>Fechado</Closed>
                    </ClosedView>
                  )}
                </>
              )}
            </Content>
          </Content>
        </CardContent>
      </CardView>
    </>
  );
};
