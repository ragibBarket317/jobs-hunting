import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-100">
      <div className="w-4/5 mx-auto flex justify-between items-center py-6 ">
        <div>
          <h2 className="text-2xl font-bold">Job Hunting</h2>
        </div>
        <div className="">
          <Link className="me-6 text-slate-800 font-semibold text-lg" to="/">
            Home
          </Link>
          <Link
            className="me-6 text-slate-800 font-semibold text-lg"
            to="/statistics"
          >
            Statistics
          </Link>
          <Link
            className="me-6 text-slate-800 font-semibold text-lg"
            to="/applyed-job"
          >
            Applyed Jobs
          </Link>
          <Link
            className="me-6 text-slate-800 font-semibold text-lg"
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div>
          <button className="bg-violet-500 py-3 px-4 text-white rounded-md">
            Start Applying
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
