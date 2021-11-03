import { Layout, Row } from "antd";
import React from "react";
import logo from "../assets/logo.png";
import pikachu from "../assets/pikachu.png";

const { Header } = Layout;

const HeaderContent = () => {
  return (
    <Header className="header">
      <img className="logo" src={logo} alt="logo" />
      <Row justify="space-between" align="middle">
        <img className="images" src={pikachu} alt="pikachu" />
        <h1 className="title">Pokemons App</h1>
      </Row>
    </Header>
  );
};

export default HeaderContent;
