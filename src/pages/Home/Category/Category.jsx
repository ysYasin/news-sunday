import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>this is caregory {id}</h3>
    </div>
  );
};

export default Category;
