import React from 'react';
import './Menu.css';
import { Row, Col,Container } from 'reactstrap';

const Footer = () =>{
    return(
        <div className="Menustyle">
       <Container>
        <Row>
         <Col>
               <h1 className="text-center mt-3">2019@Copyright</h1>

         </Col>   
        </Row>

       </Container>
       
        </div>

    )
}

export default Footer;