import React from "react";
import { Row, Input } from "antd";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

const { Search } = Input;

const SearchModule = inject("store")(
  observer(({ store }) => {
    const { searchPokemonsByName, searchPokemonsByTypes } = store;

    return (
      <Row justify="space-between" align="middle" className="search-module">
        <Search
          className="search"
          size="large"
          placeholder="Enter Pokemon name..."
          enterButton
          onChange={(e) => searchPokemonsByName(e.target.value)}
          onSearch={(search) => searchPokemonsByName(search)}
        />
        <Search
          className="search"
          size="large"
          placeholder="Enter Pokemon type..."
          enterButton
          onChange={(e) => searchPokemonsByTypes(e.target.value)}
          onSearch={(search) => searchPokemonsByTypes(search)}
        />
      </Row>
    );
  })
);

export default SearchModule;
