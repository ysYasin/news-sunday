import React from "react";
import Header from "../../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../shared/LeftSideNave/LeftNave";
import RightNav from "../../shared/RightSideNav/RightNav";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3} className="">
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6} className="">
            main body
          </Col>
          <Col lg={3} className="">
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
