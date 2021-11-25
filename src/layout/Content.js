import { Layout } from "antd";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Loading from "../components/Loader";
import AllPokemons from "../components/Pokemons/AllPokemons";
import SearchModule from "../components/Search";

const { Content } = Layout;

const ContentContainer = inject("store")(
  observer(({ store }) => {
    const { isLoading, pokemons } = store;

    return (
      <Content className="content">
        {!isLoading ? (
          <>
            <SearchModule />
            <AllPokemons />
          </>
        ) : (
          <Loading total={pokemons.length} />
        )}
      </Content>
    );
  })
);

export default ContentContainer;
