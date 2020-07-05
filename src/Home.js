import React from 'react';
import './Home.css';
import Menu from './Menu';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
	  	<Menu />
      <div className="Container position-relative">
        <img src="d.png" width="100%" height="100%" className="rounded" alt="img"/>
        <div className="centered position-absolute"><h1>Welcome our site</h1></div>
      </div>
     <Jumbotron>
       <Container className="bg-white mystyle p-3 position-relative">
         <Row>
           <Col>
              <h5>Name</h5>
              <input type="text" placeholder="Your Name"/>
           </Col> 
           <Col>
              <h5>Phone</h5>
              <input type="number" placeholder="Your Name"/>
           </Col> 
           <Col>
           <h5>Date</h5>
              <input type="date" placeholder="Your Name"/>
           </Col> 
           <Col>
              <h5>Number of People</h5>
              <select>
                <option selected hidden>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                
              </select>
           </Col> 
           <Col>
            <Button className="btn btn-dark btn-sm ">Check Availability</Button>
           </Col>

         </Row>
        </Container>
      <Container>
          <Row>
            <Col>
               <img src="3.jpg"  width="70%" className="rounded" alt="img"/>
            </Col>
            <Col>
                <h1>AboutUs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. </p>
                  
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
          </Row>

        </Container>
    </Jumbotron>
      <h1 className="text-center">Feature Offers</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor</p>


      <Container>
        <Row>
          <Col className="text-center">
            <img src="3.jpg"  width="100%" alt="img"/>
            <h4>Ravioli</h4>
            <Link to="Home">$4</Link>
          </Col>
          <Col className="text-center">
            <img src="3.jpg"  width="100%" alt="img"/>
            <h4>Black pasta</h4>
            <Link to="Home" >$4</Link>
          </Col>
          <Col className="text-center">
            <img src="3.jpg"  width="100%" alt="img"/>
            <h4>Gelato</h4>
            <Link to="Home">$3</Link>
          </Col>
        </Row>
      </Container>
      <Jumbotron>
          <h3 className="text-center">Our Restaurant Menu</h3>


      </Jumbotron>
     
     
      
    </div>
 );
}
export default Home;