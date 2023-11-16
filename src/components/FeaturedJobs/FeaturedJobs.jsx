import { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleViewDetail = (id) => {
    const detailId = id;
    return detailId;
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-4">Featured Jobs</h2>
      <p className="text-center py-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-5 py-10">
        {jobs.map((job) => (
          <SingleJob
            key={job.id}
            job={job}
            handleViewDetail={handleViewDetail}
          ></SingleJob>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="py-4 px-6 bg-indigo-500 rounded-md text-white">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
