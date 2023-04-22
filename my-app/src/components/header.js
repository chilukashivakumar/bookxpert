import React from 'react';
import './herder.css'
import {Nav, Navbar ,Container ,Row ,Col} from 'react-bootstrap';  
import Facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import  instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import {Link} from 'react-router-dom'
export default function Headerpage() {
  return (
   
    <>
     <div className='topnavigestion'><Container>
      <Row>
        <Col xs={9} >
          <div className="mailsection"><Nav.Link href="mailto:info@bookxpert.co.in"><span></span>info@bookxpert.co.in</Nav.Link>
        <p className='phone'><span></span> +91 9297 88 9999</p><p className='location'> <span></span>  Flat No: 101, Sai Srinivasam, 3rd Lane, Ashok Nagar, Guntur</p></div></Col>
        <Col xs={3}>
          <div className='icon-list'>
          <Nav.Link   href="#"><img src={Facebook}/></Nav.Link>
             <Nav.Link   href="#"><img src={linkedin}/></Nav.Link>
             <Nav.Link   href="#"><img src={instagram}/></Nav.Link>
             <Nav.Link   href="#"><img src={twitter}/></Nav.Link>
             </div></Col>
      </Row>
      
    </Container>
    </div>
    <div className='header'>
    <Container>
    <Navbar  expand="lg">
        <Navbar.Brand href="#home"><img src='https://bookxpert.co.in/assets/img/logo.png' alt="description of image"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"component="ul">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutuspage">About Us</Link></li> 
            <li><Link to="/Blogpage">Blogs</Link></li>
            <li><Link to="/Servicepage">Services</Link></li>
            </ul>
            
          </Nav>
          <Nav.Link className='appointment-btn scrollto' href="#link">Enquire Now</Nav.Link>
        </Navbar.Collapse>
       
      </Navbar>
      
      </Container>
      </div></>
  );
}
