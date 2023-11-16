import { useLoaderData } from "react-router-dom";
import SingleApplyedJob from "../SingleApplyedJob/SingleApplyedJob";

const ApplyedJob = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="w-4/5 mx-auto">
          <h2 className="text-2xl font-bold py-28 text-center text-white">
            Applyed Jobs
          </h2>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-16 ">
        <div>
          <div className="flex justify-end">
            <button className="py-2 px-4 bg-indigo-500 rounded-md text-white">
              Filter By
            </button>
          </div>
          <div className="py-10">
            {jobs.map((job) => (
              <SingleApplyedJob key={job.id} job={job}></SingleApplyedJob>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyedJob;
