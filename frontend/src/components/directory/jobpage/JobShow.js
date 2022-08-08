import React, { useEffect, useState } from 'react'
import HotJobCard from '../card-item/HotJobCard';
import Navbar from '../HomePage/Navbar';

const JobShow = () => {
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
    <>
      <Navbar />
      <div className="container">
        <div className="row m-2">
          {hotjob.map((job) =>
            <HotJobCard key={job._id} job={job} />
          )}
        </div>
      </div>
    </>
  );
}

export default JobShow