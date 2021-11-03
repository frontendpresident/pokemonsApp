import { Row } from "antd";
import React from "react";
import notFound from "../../assets/not-found.gif";

const NotFound = () => {
  return (
    <Row justify="center" align="middle">
      <img src={notFound} alt="notFound" />
    </Row>
  );
};

export default NotFound;
