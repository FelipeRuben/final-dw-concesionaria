import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>.</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="code" /> Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="database" /> Base de Datos
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="user" /> Porfolio
        </a>
      </li>
    </ul>
  );
}
