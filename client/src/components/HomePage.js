import React from "react";
import Base from "./Base";
import {
  Container,
  Carousel,
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
  Row,
} from "react-bootstrap";
import "./HomePage.css";

function HomePage() {
  return (
    <Base
    title="Don't miss a moment">
      <div className="home-page" style={{ backgroundColor: " #e7e393" }}>
        <div
          className="container"
          style={{ backgroundColor: " #e7e393", height: "17cm" }}
        >
          <div
            className="container"
            style={{ backgroundColor: " #e7e393", height: "75vh" }}
          >
            <div className="container " style={{ backgroundColor: " #e7e393" }}>
              {/* <p className="display-4 fw-bold">Don't miss a moment </p> */}
              <Button
                variant="primary"
                size="lg"
                onClick={(event) => (window.location.href = "/signup")}
              >
                SignUp
              </Button>{" "}
              <Button
                variant="danger"
                size="lg"
                onClick={(event) => (window.location.href = "/login")}
              >
                Login
              </Button>{" "}
            </div>
            <br></br>
            <Carousel className="carousel">
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1d/05/de/19/new-lunch-spread-for.jpg"
                  alt="First slide"
                  height={300}
                  width={300}
                  marginLeft="auto"
                  marginRight="auto"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://lovelytab.com/wp-content/uploads/2018/12/Mexican-Food-Wallpapers-1024x640.jpg"
                  alt="Second slide"
                  height={300}
                  marginLeft="auto"
                  marginRight="auto"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://wallpaperaccess.com/full/767292.jpg"
                  alt="Third slide"
                  height={300}
                  marginLeft="auto"
                  marginRight="auto"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default HomePage;
