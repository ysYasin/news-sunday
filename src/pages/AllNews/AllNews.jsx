import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayNewses from "./DisplayNewses";
import { useState } from "react";
import { useEffect } from "react";

const AllNews = () => {
  const [showNews, setShownews] = useState([]);
  const newses = useLoaderData();

  const Allnews = newses;
  useEffect(() => {
    let short = Allnews.slice(0, 7);
    setShownews(short);
  }, [newses]);

  return (
    <div>
      <h4 className="text-capitalize fw-semibold text-start">
        News sunday Home
      </h4>
      <section>
        {showNews.map((news) => (
          <DisplayNewses key={news._id} news={news}></DisplayNewses>
        ))}
      </section>

      <div className="w-100 d-flex my-5">
        <button
          onClick={() =>
            showNews.length === 8
              ? setShownews(newses)
              : setShownews(Allnews.slice(0, 7))
          }
          className="btn btn-danger mx-auto"
        >
          {showNews.length === 8 ? "Show More" : "Hide Data"}
        </button>
      </div>
    </div>
  );
};

export default AllNews;
