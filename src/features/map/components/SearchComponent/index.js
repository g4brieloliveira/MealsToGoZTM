import React, { useState, useEffect, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { SearchView } from "./styles";

import { LocationContext } from "../../../../services/location/location-context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        placeholder="Pesquise locais aqui..."
        value={searchKeyword}
        icon="map-outline"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
