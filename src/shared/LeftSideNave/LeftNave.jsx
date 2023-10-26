import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";

const LeftNav = () => {
  const [caterories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="my-4 me-2">
      <h4 className="fw-semibold">All categories</h4>
      {caterories &&
        caterories.map((category) => (
          <ActiveLink
            key={category.id}
            className="text-decoration-none fw-semibold d-block w-100 px-3 py-3 text-body-tertiary"
            to={`/category/${category.id}`}
          >
            {category.name}
          </ActiveLink>
        ))}
      <div className="my-5">
        <Row xs={1} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>International Tarrorist Israil</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>International Tarrorist Israil</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>International Tarrorist Israil</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
