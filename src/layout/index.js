import { Layout } from "antd";
import ContentContainer from "./Content";
import FooterContent from "./Footer";
import HeaderContent from "./Header";

const Pokemons = () => (
  <Layout className="layout">
    <HeaderContent />
    <Layout className="wrapper-app">
      <ContentContainer />
    </Layout>
    <FooterContent />
  </Layout>
);

export default Pokemons;
