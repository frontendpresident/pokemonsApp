import { Pagination, Row } from "antd";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonsCard";
import NotFound from "../../NotFound";
import PokemonInfoModal from "../PokemonsInfoModal";
import Loading from "../../Loader";

const AllPokemons = inject("store")(
  observer(({ store }) => {
    const [pagination, setPagination] = useState({
      data: [],
      current: 1,
      minIndex: 0,
      maxIndex: 0,
    });

    const {
      pokemons,
      pokemonInfoModalControl,
      setPokemonInfo,
      filtredStatus,
      searchResult,
      isNotFound,
    } = store;

    let pageSize = 40;

    const checkPokemonsData = () => {
      if (filtredStatus === "all") {
        return setPagination({
          ...pagination,
          data: pokemons,
          minIndex: 0,
          maxIndex: pageSize,
        });
      }
      return setPagination({
        ...pagination,
        data: searchResult,
        minIndex: 0,
        maxIndex: pageSize,
      });
    };

    useEffect(() => {
      checkPokemonsData();
    }, [pokemons, searchResult]);

    const handleChange = (page) => {
      setPagination({
        ...pagination,
        current: page,
        minIndex: (page - 1) * pageSize,
        maxIndex: page * pageSize,
      });
    };

    const handlePokemonInfoModalControl = (pokemon) => {
      setPokemonInfo(pokemon);
      pokemonInfoModalControl(true);
    };

    const handleChangeSizePage = (current, size) => {
      console.log(`current`, current);
      return (pageSize = size);
    };

    return !isNotFound ? (
      <>
        <div className="wrapper">
          <Row justify="center">
            {pagination.data.map(
              (pokemon, index) =>
                index >= pagination.minIndex &&
                index < pagination.maxIndex && (
                  <div key={pokemon.id} onClick={() => handlePokemonInfoModalControl(pokemon)}>
                    <PokemonCard
                      name={pokemon.name}
                      avatar={pokemon.sprites.front_default}
                      type={pokemon.types[0].type.name}
                    />
                  </div>
                )
            )}
            <PokemonInfoModal />
          </Row>
        </div>
        {pagination.data.length > 44 && (
          <Pagination
            defaultPageSize={pageSize}
            defaultCurrent={1}
            pageSizeOptions={[10, 20, 40]}
            total={pagination.data.length}
            showTotal={(total) => `Total ${total} items`}
            onChange={handleChange}
            showSizeChanger
            onShowSizeChange={handleChangeSizePage}
            showQuickJumper
            style={{ textAlign: "center", padding: "16px 0" }}
          />
        )}
      </>
    ) : (
      <NotFound />
    );
  })
);

export default AllPokemons;
