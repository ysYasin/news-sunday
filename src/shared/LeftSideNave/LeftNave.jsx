import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

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
    </div>
  );
};

export default LeftNav;
