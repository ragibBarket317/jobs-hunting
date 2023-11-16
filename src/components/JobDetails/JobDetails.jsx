import { useLoaderData, useLocation } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { state } = useLocation();
  const job = useLoaderData();

  const clickId = job.find((j) => j.id === parseInt(state));
  console.log(clickId);
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    company_name,
    salary,
    contact_information,
    id,
  } = clickId;

  const handleApplyBtn = (id) => {
    addToDb(id);
    toast("Successfully Applyed.");
  };
  return (
    <div className="">
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="w-4/5 mx-auto">
          <h2 className="text-2xl font-bold py-28 text-center text-white">
            {company_name}
          </h2>
        </div>
      </div>
      <div className="w-4/5 mx-auto grid grid-cols-3 py-16 gap-10">
        <div className="col-span-2">
          <p className="mb-10">
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p className="mb-10">
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="mb-10">
            <span className="font-bold">Educational Requirements: </span>
            <br></br>
            {educational_requirements}
          </p>
          <p className="mb-10">
            <span className="font-bold">Experiences: </span>
            <br></br>
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-indigo-200 p-10 rounded-md">
            <h2 className="text-xl border-b pb-4">Job Details</h2>
            <p className="mb-4 mt-4">
              <span className="font-bold">Salary: </span>
              {salary}
            </p>
            <p className="mb-4">
              <span className="font-bold">Job-Title: </span>
              {job_title}
            </p>
            <h2 className="text-xl border-b pb-4">Contact Information</h2>
            <p className="mb-4 mt-4">
              <span className="font-bold">Phone: </span>
              {contact_information.phone}
            </p>
            <p className="mb-4">
              <span className="font-bold">Email: </span>
              {contact_information.email}
            </p>
            <p className="mb-4">
              <span className="font-bold"> Address: </span>
              {contact_information.address}
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleApplyBtn(id)}
              className="py-2 px-4 bg-indigo-500 rounded-md text-white w-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
