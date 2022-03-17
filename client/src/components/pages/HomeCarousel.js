import React from "react";
import { Carousel, Container, Row, Col, Button, Figure } from "react-bootstrap";
import { FaVolumeUp } from "react-icons/fa";
function HomeCarousel() {
  return (
    <Row style={{ display: "flex" }}>
      <Col sm={8} >
        <Figure>
          <Figure.Image
            src="https://media.istockphoto.com/photos/girl-holding-burger-gesturing-thumbsup-standing-on-yellow-background-picture-id1189158907?k=20&m=1189158907&s=612x612&w=0&h=xxO_y52stB0j6F1cNB3Yi5h7_zkG7vjaVJrpiapK2Xo="
            alt="cuisines"
            style={{ width: "100%",float:'left',paddingRight:'1cm'}}
          />
        </Figure>
      </Col>
      <Col sm={3} style={{ textAlign: "left", paddingTop: "1cm" }}>
        <h1>
          <FaVolumeUp /> Our Quality Speaks Volumes{" "}
        </h1>
        <br></br>
        <p>
          Life can be complicated but ordering food doesn't have to be.{" "}
          <br></br>
          Let us take care of the details while you focus on what really
          matters.
        </p>
      </Col>
    </Row>
  );
}

export default HomeCarousel;
