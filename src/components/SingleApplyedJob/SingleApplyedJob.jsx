import { Link } from "react-router-dom";
import location2 from "../../assets/icons/location2.png";
import money from "../../assets/icons/money.png";

const SingleApplyedJob = ({ job }) => {
  const {
    id,
    company_name,
    job_title,
    location,
    logo,
    remote_or_onsite,
    salary,
    job_type,
  } = job;
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center border mb-10 p-6 rounded-md">
        <div className="me-8 bg-slate-300 w-[150px] h-[150px] py-14 px-4 rounded-lg">
          <img className="w-[100%]" src={logo} alt="" />
        </div>
        <div className="grow">
          <h2 className="text-xl font-bold  py-3">{job_title}</h2>
          <p className="text-slate-400">{company_name}</p>
          <div className="flex mt-4">
            <div className="border border-indigo-500 py-2 px-4 rounded-md text-indigo-500 me-6">
              {remote_or_onsite}
            </div>
            <div className="border border-indigo-500 py-2 px-4 rounded-md text-indigo-500 me-6">
              {job_type}
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex me-6">
              <img src={location2} alt="" />
              <h2>{location}</h2>
            </div>
            <div className="flex">
              <img src={money} alt="" />
              <h2>{salary}</h2>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/job-details" state={`${id}`}>
            <button className="py-2 px-4 bg-indigo-500 rounded-md text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleApplyedJob;
