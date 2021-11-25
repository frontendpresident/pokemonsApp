import { Button, Card, Modal, Row } from "antd";
import { inject, observer } from "mobx-react";

const PokemonInfoModal = inject("store")(
  observer(({ store }) => {
    const { pokemonInfoVisible, pokemonInfoModalControl, pokemonInfo } = store;

    return (
      <Modal
        visible={pokemonInfoVisible}
        onCancel={() => pokemonInfoModalControl(false)}
        onOk={() => pokemonInfoModalControl(true)}
        footer={
          <Button onClick={() => pokemonInfoModalControl(false)}>Cancel</Button>
        }
      >
        {pokemonInfo !== null && (
          <Card className="card-pokemon-info">
            <div>
              <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
                {pokemonInfo.name}
              </h1>
            </div>
            <img
              src={pokemonInfo.sprites.front_default}
              alt={pokemonInfo.name}
              className="pokemon-info-avatar"
            />
            <div className="pokemon-info-block">
              {pokemonInfo.stats.map((stat) => (
                <div key={Math.random() * 78} className="pokemon-info-stats">
                  <h3 style={{ textTransform: "uppercase" }}>
                    {stat.stat.name}
                  </h3>
                  <h3 style={{ textTransform: "uppercase" }}>
                    {stat.base_stat}
                  </h3>
                </div>
              ))}
              <Row
                justify="space-between"
                align="top"
                style={{
                  borderBottom: "1px solid black",
                  paddingRight: "20px",
                }}
              >
                <h3>TYPES</h3>
                <ul>
                  {pokemonInfo.types.map((type) => (
                    <li
                      key={pokemonInfo.id}
                      style={{ textTransform: "uppercase" }}
                    >
                      <h3>{type.type.name}</h3>
                    </li>
                  ))}
                </ul>
              </Row>
            </div>
          </Card>
        )}
      </Modal>
    );
  })
);

export default PokemonInfoModal;
