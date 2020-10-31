import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import car1 from "../../../assets/img/jpg/Honda-CRV-2016.jpg";
import car2 from "../../../assets/img/jpg/Hyundai-Elantr-2011.jpg";
import car3 from "../../../assets/img/jpg/Kia-Sportage-2013.jpg";
import car4 from "../../../assets/img/jpg/kiaSportage2017.jpg";
import car5 from "../../../assets/img/jpg/mazdaCx-5-2017.jpg";
import car6 from "../../../assets/img/jpg/Nissan-Frontier-2017.jpg";
import car7 from "../../../assets/img/jpg/Nissan-Sentra.jpeg";
import car8 from "../../../assets/img/jpg/Nissan-versa-2011.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Galeria de Automóvil Fridal</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={car1}
              title="Honda CRV "
              subtitle="Modelo: 2016"
              link="http://localhost:3000/blog/crv"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={car2}
              title="Hyundai Elantra"
              subtitle="Modelo: 2011"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={car3}
              title="Kia Sportage "
              subtitle="Modelo: 2013"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={car4}
              title="kia Sportage "
              subtitle="Modelo: 2017"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={car5}
              title="mazdaCx-5"
              subtitle="Modelo: 2017"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={car7}
              title="Nissan-Sentra"
              subtitle="Modelo: 2014"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={car8}
              title="Nissan-versa"
              subtitle="Modelo: 2011"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={car6}
              title="Nissan-Frontier"
              subtitle="Modelo: 2017"
              link="http://localhost:3000/blog/nissan"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link>
          <Button>detalle en catalogo</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>VER MAS</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
