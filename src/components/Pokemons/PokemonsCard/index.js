import React from "react";
import styled from "styled-components";
import "./style.css";

const Container = styled.div`
  width: 150px;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
`;

export const PokemonCard = ({ name, avatar, type }) => {
  return (
    <Container className={`pokemons-${type}`}>
      <img src={avatar} alt={`${name}`} />
      <p className="pokemon-name">{name}</p>
    </Container>
  );
};
