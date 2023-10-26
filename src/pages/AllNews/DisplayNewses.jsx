import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaEye,
  FaShareAlt,
  FaShareAltSquare,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const DisplayNewses = ({ news }) => {
  const {
    _id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center gap-2">
        <Image src={author.img} style={{ height: "40px" }} roundedCircle />
        <div className="flex-grow-1">
          <h5>{author.name}</h5>
          <span>{moment(author.published_date).format("YYYY-MM-DD")}</span>
        </div>
        <div>
          <FaBookmark style={{ fontSize: "1.09rem" }} className="me-3" />
          <FaShareAlt style={{ fontSize: "1.09rem" }} className="me-3" />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-semibold mb-3">{title}</Card.Title>
        <Card.Text>
          <div style={{ height: "292px", overflow: "hidden" }} className="mb-3">
            <Image
              src={thumbnail_url}
              className="w-100 h-100 rounded-0"
              fluid
            />
          </div>
          <p>
            {details.length === 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          {"   "}
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          {"   "}
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default DisplayNewses;
