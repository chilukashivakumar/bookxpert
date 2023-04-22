import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel ,Nav} from 'react-bootstrap';  
import './Carousel.css'
import welcome from "../welcome.json";

// import img1 from 'https://bookxpert.co.in/assets/img/slide2.jpg'  
function Carousellist() {  
    console.log(welcome);
  return (  
    <>  
    <div >  
       
    <Carousel interval={500000}>  
  
    {welcome.map((list) => (
          
        
          <Carousel.Item>         
                       
                         <img  
      className="d-block w-100"  
      src={list.picture}
      alt="Second slide"  
    />  
    <Carousel.Caption>  
      <h1>Now </h1> 
      <h2>Fulfillment of  your dreams</h2>
      <h1>has a new address! </h1> 
      <h4>{list.content}  </h4>
      <Nav.Link className='appointment-btn scrollto' href="#link">Get More Info</Nav.Link>
    </Carousel.Caption> 
    </Carousel.Item>   
                        
                    ))}
</Carousel>  
</div>  
    </>  
  );  
}  
export default Carousellist;  