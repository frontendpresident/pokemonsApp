import { Layout } from "antd";
import React from "react";
import ContentContainer from "./Content";
import FooterContent from "./Footer";
import HeaderContent from "./Header";

const Pokemons = () => {
  return (
    <Layout className="layout">
      <HeaderContent />
      <Layout className="wrapper-app">
        <ContentContainer />
      </Layout>
      <FooterContent />
    </Layout>
  );
};

export default Pokemons;
