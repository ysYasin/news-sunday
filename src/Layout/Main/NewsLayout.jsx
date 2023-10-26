import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../../shared/RightSideNav/RightNav";
import Footer from "../../shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <main className="main">
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg={9} className="">
              <Outlet />
            </Col>
            <Col lg={3} className="">
              <RightNav />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </main>
  );
};

export default NewsLayout;
