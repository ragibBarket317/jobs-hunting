import social from "../../assets/icons/social.png";
const Footer = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="w-4/5 mx-auto">
        <div className=" flex justify-between ">
          <div>
            <h2 className="text-4xl font-bold  py-4 text-white">Job Hunting</h2>
            <p className="text-slate-200 mb-6 w-96">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={social} alt="" />
          </div>
          <div className="text-white list-none ">
            <div>
              <h2 className="text-4xl font-bold  py-4 text-white">Company</h2>
              <li className="mt-2">Home</li>
              <li className="mt-2">About</li>
              <li className="mt-2">Latest News</li>
              <li className="mt-2">Careers</li>
            </div>
          </div>
          <div className="text-white list-none">
            <div>
              <h2 className="text-4xl font-bold  py-4 text-white">Contact</h2>
              <p className="text-slate-200 mb-6 w-96 leading-8">
                Dhaka, Bangladesh <br></br>
                01774086317
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-slate-200 mt-20 text-center text-white pt-5">
          Copy right @ Job-Hunting -- 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
