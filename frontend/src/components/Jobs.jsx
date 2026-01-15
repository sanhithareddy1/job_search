import { useEffect, useState } from "react";
import { fetchJobs } from "../api";
import Job from "./Job";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobs(); // fetch from backend
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => <Job key={job._id} job={job} />)
      )}
    </div>
  );
}

export default Jobs;
