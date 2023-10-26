import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DisplayNewses from "../../AllNews/DisplayNewses";
import { useState } from "react";
import { useEffect } from "react";

const Category = () => {
  const [newses, setNewses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  return (
    <div>
      <h4 className="text-capitalize fw-semibold text-start">
        {id == 0 ? "News sunday Home" : `this is category ${parseInt(id) + 1}`}
      </h4>
      <section>
        {newses.map((news) => (
          <DisplayNewses key={news._id} news={news}></DisplayNewses>
        ))}
      </section>
    </div>
  );
};

export default Category;
