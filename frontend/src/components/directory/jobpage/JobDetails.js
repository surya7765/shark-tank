import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import "./jobdetails.css";

const JobDetails = () => {
  const params = useParams();

  const [jobdetails, setJobDetails] = useState([]);
  const navigate = useNavigate();

  // fetch details using useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/jobpost/${params._id}`)
      .then((res) => {
        // const data = res.json();
        // console.log(res.data.jobPost);
        setJobDetails(res.data.jobPost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params._id]);

  return (
    <>
      <Navbar />
      <div className="container mt-1">
        <button className="button btn-light" onClick={() => navigate(-1)}>
          GO BACK
        </button>
        <h2>{jobdetails.jobTitle}</h2>
      </div>
    </>
  );
};

export default JobDetails;
