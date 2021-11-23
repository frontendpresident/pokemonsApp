import React, { useEffect } from "react";
import store from "./store";
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
