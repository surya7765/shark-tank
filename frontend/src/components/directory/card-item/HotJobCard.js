import React from "react";
import "./hotjobcard.css";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const { _id, jobTitle, location, experience, companyName } = job;

  return (
    <>
      <div>
        <div className="col-sm-12 col-md-4">
          <Link
            to={{
              pathname: `/jobs/${_id}`,
            }}
            style={{textDecoration: 'none'}}
          >
            <div
              className="card m-2"
              style={{ width: 300, borderRadius: 5, border: 0 }}
            >
              <div className="card-body">
                <h5 className="card-title">{jobTitle}</h5>

                <p className="card-text">
                  <span className="job-location">Location: {location}</span>
                  <br />
                  <span className="job-experience">
                    Experience: {experience} years
                  </span>
                  <br />
                  <span className="job-experience">{companyName}</span>
                </p>
              </div>
              {job.hotJob ? (
                <span className="badge rounded-pill bg-success">HOT</span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HotJobCard;
