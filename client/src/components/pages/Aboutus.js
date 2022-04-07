import React from 'react'
import Wrapper from "../styles/aboutusstyles";
import { Row, Col, Container, Image, Button, Carousel, Card } from 'react-bootstrap';
import Chef from '../../images/Chef.png';
import Diet from '../../images/Diet.png';
import Hamburger from '../../images/Hamburger.png';
import Cooking from '../../images/Cooking.png'
import { useNavigate } from 'react-router'


const Aboutus = () => {
  const navigate = useNavigate();

  return (

    <Wrapper>
      <Container>

        <div className='grid-box'>
          <Row>
            <Col sm={5} >
              <h4>
                BETTER FOOD FOR MORE PEOPLE
              </h4>
              <p>
                ENJOY THE AROMA AND EXPERIENCE NEW TASTES.
                <br></br>
                <span>WITH OUR FOOD.</span>
              </p>
              <h6>
                One click away to experience our food!!
                <br>
                </br>
                <br></br>
                <Button onClick={() => navigate("/login")} className='btn-register' variant="outline-danger">Login</Button>{' '}
              </h6>

            </Col>
            <Col sm={7}>

              <Image className='img' fluid src={Chef} alt='source-img' />
            </Col>
          </Row>
        </div>

          <Row >
            <Col sm={7} >
            <div>
              <Carousel fade>
              
                <Carousel.Item>
                  <img
                    className="col-carousel"
                    src={Diet}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="col-carousel"
                    src={Hamburger}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="col-carousel"
                    src={Cooking}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div>
            </Col>
            <Col sm={4}>
              <h4 style={{ paddingLeft: '1cm' }}>
                WHAT WE DO?
              </h4>
              <br></br>
              <Card>
                <Card.Header as="h5">Driving the force of assortment</Card.Header>
                <Card.Body>
                  <Card.Title>Empower our users</Card.Title>
                  <Card.Text>
                    We empower our users in discovering tastes by putting information and enabling them to make an informed choice.
                  </Card.Text>
                </Card.Body>            
                <Card.Header as="h5">Focusing on Affordabiity</Card.Header>
                <Card.Body>
                  <Card.Title>Accessibility for customers</Card.Title>
                  <Card.Text>
                    We leave no stone unturned when it comes to making food more affordable and accessible.
                  </Card.Text>
                </Card.Body>              
                <Card.Header as="h5">Improving quality of food</Card.Header>
                <Card.Body>
                  <Card.Title> 100% Authentic </Card.Title>
                  <Card.Text>
                    We make food in our kitchen which is 100% authentic.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        <br></br>
      </Container>
    </Wrapper>

  )
}

export default Aboutus