import axios from "axios";
import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: false,
});

class PokemonsStore {
  isLoading = false;
  allPokemons = [];
  pokemons = [];
  pokemonInfoVisible = false;
  pokemonInfo = null;
  filtredStatus = "all";
  searchResult = [];
  isNotFound = false;


  constructor() {
    makeAutoObservable(this);
  }

  getPokemonsInfo = () => {
    this.allPokemons.forEach((pokemon) => {
      axios.get(pokemon.url).then((response) => {
        if (response.data) {
          this.pokemons.push(response.data);
        }
        if (this.pokemons.length === 800) {
          this.isLoading = false;
        }
      });
    });
  };

  getAllPokemons = () => {
    this.isLoading = true;
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`).then((response) => {
      this.allPokemons = response.data.results;
      this.getPokemonsInfo();
    });
  };

  pokemonInfoModalControl = (boolean) => {
    return (this.pokemonInfoVisible = boolean);
  };

  setPokemonInfo = (pokemon) => {
    return (this.pokemonInfo = pokemon);
  };

  searchPokemonsByName = (search) => {
    const text = search.toLowerCase();
    if (this.filtredStatus === "all") {
      this.searchResult = this.pokemons.filter((pokemon) => {
        return pokemon.name.includes(text);
      });
      this.filtredStatus = "filtred";
    } else {
      this.searchResult = this.searchResult.filter((pokemon) => {
        return pokemon.name.includes(text);
      });
    }

    if (text === "") {
      this.filtredStatus = "all";
      this.searchResult = [];
    }

    if (this.searchResult.length === 0 && text !== "") {
      this.isNotFound = true;
    } else {
      this.isNotFound = false;
    }
  };

  handleChangePokemonsByTypes = (types) => {
    if (types === "") {
      this.filtredStatus = "all";
      this.searchResult = [];
      console.log(this.pokemons);
    }
  };

  searchPokemonsByTypes = (types) => {
    this.handleChangePokemonsByTypes();
    this.searchResult = [];
    const typesArr = types.split(" ");
    this.filtredStatus = "filtredByTypes";
    this.pokemons.forEach((i) => {
      i.types.forEach((type) => {
        if (typesArr.length > 0) {
          typesArr.forEach((arr) => {
            if (type.type.name.includes(arr)) {
              this.searchResult.push(i);
            }
          });
        }
      });
    });
    this.searchResult = Array.from(new Set(this.searchResult));
    if (this.searchResult.length === 0) {
      this.isNotFound = true;
    } else {
      this.isNotFound = false;
    }
  };
}

export default new PokemonsStore();
