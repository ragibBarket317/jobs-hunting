import user from "../../assets/images/user.png";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-slate-100 pt-10">
        <div className="w-4/5 mx-auto h-full grid grid-cols-2">
          <div className="flex items-center">
            <div>
              <h2 className="text-8xl font-semibold mb-8">
                One Step Closer To Your <br></br>
                <span className="text-purple-500">Dream Job</span>
              </h2>
              <p className="w-3/4 mb-8">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="bg-violet-500 py-3 px-4 text-white rounded-md">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto py-20">
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default HeroSection;
