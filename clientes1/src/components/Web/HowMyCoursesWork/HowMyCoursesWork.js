import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>No te quedes si tu vehículo !</h2>
        <h3>
          Diferentes vehículos para cada gusto, Nos ajustamos a tu necesidad y
          posibilidad
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="car"
              title="Nuevos y usados"
              description="Te ofrecemos vehiculos nuevos y  seminuevos Todos los vehiculos incluyen garantia"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="medicine-box"
              title="Seguro"
              description="Por la compra de tu vehiculo te incluye 6 meses de seguro medico"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Opinion"
              description="Tus aportes y sugerencias sobre los vehiculos que deseas son tomadas en cuenta"
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Precios bajos"
              description="Te ofrecemos una amplia gama de vehiculos al mejor precio."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="check-circle"
              title="Auto"
              description="Un sueño sin ambición es como un auto sin gasolina… no vas a ningún lado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Calidad"
              description="Te ofrecemos autos de calidad con garantia"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}
