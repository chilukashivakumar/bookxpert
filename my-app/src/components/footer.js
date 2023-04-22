import React from 'react';
import './footer.css';
import { Container, Row, Col,Nav } from 'react-bootstrap';
import Facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import  instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

const data = {
  addresslist: [
    {
      title: "BOOKXPERT",
      address: 'Hyderabad (Head Office):',
      addressHyderabad: '5th floor upstairs of Matrix lab, Dwarakamai building plot no 132 6th phase KPHB colony HYDERABAD ,Telangana-500072.',
      Hyderabadphone: '040 23800833',
      HyderabadMobile: '+91-9392912591',
    },
    {
      title: "",
      address: 'Guntur (Registered Office):',
      addressHyderabad: '5th floor upstairs of Matrix lab, Dwarakamai building plot no 132 6th phase KPHB colony HYDERABAD ,Telangana-500072.',
      Hyderabadphone: '040 23800833',
      HyderabadMobile: '+91-9392912591',
      Email: ' info@bookxpert.co.in',
    },
    {
      title: "",
      address: 'Bangalore (Regional Office):',
      addressHyderabad: '5th floor upstairs of Matrix lab, Dwarakamai building plot no 132 6th phase KPHB colony HYDERABAD ,Telangana-500072.',
      Hyderabadphone: '040 23800833',
      HyderabadMobile: '+91-9392912591',
      Email: ' info@bookxpert.co.in',
    },
  ],
  footerlink: [

    {
      
      title: "Home",
      link: "#",
    },
    {
      title: "About us",
      link: "#",
    },
    {
      title: "Services",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "What We Offer",
      link: "https://bookxpert.co.in/#what-we-offer",
    },
    {
      title: "How It Works",
      link: "https://bookxpert.co.in/#how-it-works",
    },
    {
      title: "Terms of service",
      link: "https://bookxpert.co.in/#",
    },
    {
      title: "Privacy policy",
      link: "https://bookxpert.co.in/#",
    }
    
  ],
  footerlinkleft: [
    {
      
      title: "No Security Risk",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Account Management",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Statuory Compliance",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Audit & Filling Of Returns",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Data Management",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Awesome Support",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Always Available",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Tax Planing",
      link: "https://bookxpert.co.in/#services",
    },
    {
      title: "Bank Compiances",
      link: "https://bookxpert.co.in/#services",
    }
    
  ],
  footericons: [
     {
      facebook:'src/images/facebook.svg',
      linkedin:'./images/linkedin.svg',
      instagram:'./images/instagram.svg',
      twitter:'./images/twitter.svg',
     }
   ],
};

export default function Footersection() {

  return (
    <div className='footer-top '>
      <Container>

        <Row>
          <Col xs={6}  className='footer-contactlist'>
            {data.addresslist.map((item, index) => (
              <>
   <div className='contactlist'>
       {item.title ? <h2>{item.title}</h2> : null}
                 <h3><b>{item.address}</b></h3>
                 <div className='address'>
                <p>{item.addressHyderabad}</p>
                <p><b>Phone:</b>{item.Hyderabadphone}</p>
                <p><b>Mobile:</b>{item.HyderabadMobile}</p>
                {item.Email ?<p><b>Email</b>{item.Email}</p>: null}
                </div>
                </div>
              </>
            ))}
          </Col>
          <Col xs={6}>
            <Row>
            <Col xs={6} className='footer-linkslist'>
            <h2>Useful Links</h2>
            {data.footerlink.map((item, index) => (
              <>
             
              <ul>
                <li>   <Nav.Link   href={item.link}>{item.title}</Nav.Link></li>
              </ul>
              </>
            ))}
              </Col>
              <Col xs={6} className='footer-linkslist'>
              <h2>Our Services</h2>
            {data.footerlinkleft.map((item, index) => (
              <>
           
              <ul>
                <li>   <Nav.Link   href={item.link}>{item.title}</Nav.Link></li>
              </ul>
              </>
            ))}
              </Col>
            </Row>
          </Col>
          
        </Row>
 
        
      
      </Container>
      <div className='footericons'>
        <Container>
        <Row>
          <Col xs={6}>
            <p>© Copyright Book Xpert. All Rights Reserved</p>
          </Col>
          <Col xs={6}>
          {data.footericons.map((item, index) => (
              <>
              <div className='float'>
             <Nav.Link   href={item.link}><img src={Facebook}/></Nav.Link>
             <Nav.Link   href={item.link}><img src={linkedin}/></Nav.Link>
             <Nav.Link   href={item.link}><img src={instagram}/></Nav.Link>
             <Nav.Link   href={item.link}><img src={twitter}/></Nav.Link>
             </div>
              </>
            ))}
          </Col>
          </Row>
          </Container>
          </div>

    </div>
  );
}