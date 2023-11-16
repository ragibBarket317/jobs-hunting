const SingleCategory = ({ category }) => {
  const { id, logo, category_name, availability } = category;
  return (
    <div className="bg-slate-100 p-10 rounded-md">
      <div className="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-xl font-bold  py-3">{category_name}</h2>
      <p className="text-slate-400">{availability}</p>
    </div>
  );
};

export default SingleCategory;
