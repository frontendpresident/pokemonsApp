import { Layout, Row } from "antd";
import ball from "../assets/ball.png";

const { Footer } = Layout;

const FooterContent = () => (
  <Footer className="footer">
    <Row justify="space-around" align="middle">
      <img className="ball" src={ball} alt="ball" />
      <h1>©2021 by Sergey M.</h1>
      <img className="ball" src={ball} alt="ball" />
    </Row>
  </Footer>
);

export default FooterContent;
