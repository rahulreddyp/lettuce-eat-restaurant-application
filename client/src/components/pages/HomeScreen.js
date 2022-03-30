// Author : Pavan Abburi
//This component is the landing page of the application
import React from "react";
import { Stack, Button, Row, Col, Container, Figure } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import "../styles/homeScreen.css";
import { FaVolumeUp } from "react-icons/fa";
 
const HomeScreen = () => {
  return (
   
    <div>
      <div className="hero-container">
        <video src="/videos/Home_screen_video.mp4" autoPlay loop muted />
        <h1>SATISFY YOUR CRAVINGS</h1>
        <p>What are you waiting for?</p>
      </div>

      

      <div style={{paddingTop:'1cm',paddingBottom:'1cm' }} className='container'>
        <Row>
          <Col sm={4}>
            <h1>Every Flavour Welcome</h1>
            <p>
               From your neighbourhood donair spot to the pizza and sushi you
              crave, choose from over wide range of varities which includes
              local and national favourites across the globe .All your favourite
              cuisines and dishes at one place.
            </p>
            <Button variant="outline-danger">Menu</Button> <br></br>
          </Col>
          
          <Col sm={8} style={{padding:'0.5cm'}}>
            <Figure>
              <Figure.Image
               
                alt="171x180"
                src="https://c4.wallpaperflare.com/wallpaper/303/793/304/buffet-meal-food-brunch-wallpaper-preview.jpg"
              />
            </Figure>
          </Col>
        </Row>



        <Row style={{ display: "flex" }}>
      <Col sm={8} >
        <Figure>
          <Figure.Image
            src="https://media.istockphoto.com/photos/girl-holding-burger-gesturing-thumbsup-standing-on-yellow-background-picture-id1189158907?k=20&m=1189158907&s=612x612&w=0&h=xxO_y52stB0j6F1cNB3Yi5h7_zkG7vjaVJrpiapK2Xo="
            alt="cuisines"
            style={{ width: "100%",height:'100%',float:'left',paddingRight:'1cm'}}
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
      </div>
      
      </div>
  );
};

export default HomeScreen;
