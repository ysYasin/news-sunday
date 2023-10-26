import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const data = useLoaderData();
  console.log(data);
  const { image_url, title, details } = data;
  return (
    <div>
      <h4>News Sunday</h4>
      <Card>
        <Card.Body>
          <div className="w-100">
            <img src={image_url} width={"100%"} alt="" />
          </div>
          <Card.Title className="my-3 fs-2">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="danger" className="my-4">
            <FaArrowLeft></FaArrowLeft> {"  "} All news in this category
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
