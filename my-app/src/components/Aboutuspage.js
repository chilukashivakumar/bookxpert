import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img from "../images/innovative.jpg"

export default function Aboutuspage() {

  return (

    <div className='AboutUscontainer'>

      <Container>

        <Row>
          <Col xs={12} className='Services'>
            <h2 className='section-heading'> Innovative Solutions For Account Problems</h2>
            <p>Our model is flexible enough to support individual needs and circumstances that you can outsource totally or partially:</p>
          </Col>
          <Col xs={5} >

            <img src={img} alt="description of image" />


          </Col>

          <Col xs={7} className="about">

            <p>The business is led by a group of professionals from different fields and backgrounds who have the functional and technological experience. We're here to help MSMEs overcome their accounting and enforcement issues under different laws of the country</p>
            <p>As per our Research we found out that Large Number of MSMEs are incurring Huge Losses and are struggling daily to fulfill their accounting and enforcements needs due to Constraints with respect to their Location, Lack of Fully Trained People to execute their Accounting Works, Cost Overruns to Fulfill all enforcement needs, and Poor Quality of Services provided by existing lot. To solve these Problems, our team is committed to develop creative and cost-effective real-time customized solutions catering to your needs.</p>
            <p>MBA from a world-famous B-School for Entrepreneurship, Chartered accountants with two and a half decades of experience in practice, Information Technology Specialist with ten years of experience in growth and solution design, Cost Accountant and foreign faculty for SAP ERP, make up the Board of Directors.</p>
          </Col>

        </Row>
      </Container>
      <div className='why-us section-bg-overview'>
        <Container>
          <Row>
            <Col xs={12}>
              <div className='section-content'>
                <h3 className='heading'>Problem & Dimensions</h3>
                <Row>
                  <Col xs={12}>
                    <p className='mar-40'>More compliances, complicated rules, midnight amendments, and harsh penalties and fines which are auto calculated are now the issues in addition to the existing problems faced by various stake holders.</p>
                  </Col>
                  <Col xs={6}>
                    <h4>Customers’ common issues : </h4>
                    <ul>
                      <li>Finding Reliable and Capable Accountant</li>
                      <li>Struggling to use Technology for filing Returns</li>
                      <li>Poor, Incomplete and Incorrect work done by accountants</li>
                      <li>Higher Fees Charged by Accountants</li>
                      <li>Delay in Returns and Compliances etc.</li>
                    </ul>
                  </Col>
                  <Col xs={6}>

                    <h4 > CAs common issues: </h4>
                    <ul>
                      <li>Last minute rush from Business Owners to complete their Returns.</li>
                      <li>Incomplete Books provided by Business Owners.</li>
                      <li>Lack of Supporting Documents to corroborate their Revenues and Expenditures Estimates making it Tough for Attestation.</li>
                      <li>Irregular Work Load </li>
                      <li>Non availability of staff with requisite skills and knowledge etc.</li>
                    </ul>


                  </Col>
                  <Col>
                    <p>Even other stakeholders in the economy like Financial Institutions, Government Departments etc. are suffering as a result of these problems.</p>

                    <p>Now, our solution meets all of these stakeholders needs and can bring relief to them all. MSMEs can afford and rely on us with confidence and gets relief at the same time.</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>







    </div>
  );
}
