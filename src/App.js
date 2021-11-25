import { useEffect } from "react";
import { Provider } from "mobx-react";
import store from "./store";
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
