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

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurante X",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = "Rua X, numero XX",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const ratingEmptyArray = Array.from(new Array(Math.ceil(5 - rating)));

  return (
    <>
      <CardView elevation={5}>
        <CardImage source={{ uri: photos[0] }} />
        <CardContent>
          <Content>
            <Title>{name}</Title>
            <Rating>
              <>
                {ratingArray.map(() => (
                  <Star source={star} />
                ))}
                {ratingEmptyArray.map(() => (
                  <Star source={starEmpty} />
                ))}
              </>
            </Rating>
          </Content>

          <Content>
            <Description>{address}</Description>
            <Description>
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
            </Description>
          </Content>
        </CardContent>
      </CardView>
    </>
  );
};
