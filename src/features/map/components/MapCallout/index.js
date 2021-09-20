import React from "react";

import { CompactRestaurantInfo } from "../../../../components/restaurant/RestaurantCallout";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap />
);
