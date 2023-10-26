import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsits from "../AllNews/EditorInsites/EditorInsits";

const News = () => {
  const data = useLoaderData();
  const { image_url, title, details, category_id } = data;
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
          <Link to={`/category/${category_id}`}>
            <Button variant="danger" className="my-4">
              <FaArrowLeft></FaArrowLeft> {"  "} All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorInsits></EditorInsits>
    </div>
  );
};

export default News;
