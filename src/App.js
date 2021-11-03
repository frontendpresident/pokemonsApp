import React, { useEffect } from "react";
import store from "./store";
import AllPokemons from "./components/Pokemons/AllPokemons/index";
import SearchModule from "./components/Search";
import { Provider } from "mobx-react";
import Pokemons from "./layout";

const App = () => {
  useEffect(() => {
    store.getAllPokemons();
  }, []);

  return (
    <Provider store={store}>
      <Pokemons />
    </Provider>
  );
};

export default App;
