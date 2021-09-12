import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfo } from "../../components/RestaurantInfoComponent";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Café da manhã"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
          <List.Item title="Item 5" />
        </List.Accordion>

        <List.Accordion
          title="Almoço"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
          <List.Item title="Item 5" />
        </List.Accordion>

        <List.Accordion
          title="Jantar"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
          <List.Item title="Item 5" />
        </List.Accordion>

        <List.Accordion
          title="Bebidas"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
          <List.Item title="Item 5" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
