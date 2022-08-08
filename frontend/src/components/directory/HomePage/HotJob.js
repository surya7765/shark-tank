import React, { useEffect, useState } from "react";
import HotJobCard from "../card-item/HotJobCard";

const HotJob = () => {
  // set state for repos
  const [hotjob, setHotjobs] = useState([]);

  // fetch data from API using useEffect
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/admin");
      const data = await res.json();
      setHotjobs(data.jobPost);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="head-text">Hot Jobs</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row m-2">
                {hotjob.map((job) =>
                  job.hotJob ? <HotJobCard key={job._id} job={job} /> : ""
                )}
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#prev"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next "
          href="#next"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HotJob;
