import { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const JobCategory = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="pb-32">
      <h2 className="text-4xl font-bold text-center py-4">Job Category List</h2>
      <p className="text-center py-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-5 py-10">
        {categorys.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
