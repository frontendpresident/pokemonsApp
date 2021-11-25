import { Row } from "antd";
import notFound from "../../assets/not-found.gif";

const NotFound = () => (
  <Row justify="center" align="middle">
    <img src={notFound} alt="notFound" />
  </Row>
);

export default NotFound;
