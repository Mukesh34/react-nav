import React from 'react';
import './Contact.css';
import Menu from './Menu';
import { Row,Col,Container } from 'reactstrap';

const Contact =  () => {
    return(
        <div className="App">
            <Menu />   
            <div className="Contactstyle">
            <Container>
                <Row>
                  <Col>
                    <h1 className="text-center mt-5">Welcome to Contact</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="offset-md-3">
                    <form className="Formstyle  my-3 p-4 ">
                      <label>Fullname:</label>
                      <input type="text" /><br/><br/>

                      <label>Email:</label>
                      <input type="email" /><br/><br/>

                      <label>Mobile:</label>
                      <input type="number" /><br/><br/>

                      <label>Message:</label>
                      <textarea/><br/>

                      <center> <input type="submit" value="submit"/></center>
                  </form>
                </Col>
              </Row>
            </Container>
            </div>
        </div>
    )
}
export default Contact;  