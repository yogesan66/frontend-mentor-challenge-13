import filterStore from "../store/filterStore";

const JobCard = ({ data }) => {
  const { addItem, filters } = filterStore();
  const itemClicked = (item) => {
    addItem(item);
  };

  return (
    <div
      className={
        "bg-white  w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5 px-4 md:px-8 py-5 shadow-lg rounded-md " +
        (data.featured ? "border-l-[6px] md:border-l-4 border-green-400" : "")
      }
    >
      <div className="relative flex flex-col md:flex-row w-full md:max-w-max md:items-center gap-6 tracking-wide">
        <img
          src={data.logo}
          className="w-14 md:w-20 absolute -top-12 md:static"
        />
        <div className="flex flex-col gap-1 mt-5 md:mt-0">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-green-400">{data.company}</p>
            <div className="flex items-center uppercase gap-2">
              {data.new && (
                <span className="bg-green-400 rounded-full px-2 pt-1 text-green-50 text-xs flex justify-center items-center">
                  New!
                </span>
              )}

              {data.featured && (
                <span className="bg-green-900 rounded-full px-2 pt-1 text-green-50 text-xs">
                  Featured
                </span>
              )}
            </div>
          </div>
          <p className="font-bold text-green-900 text-lg hover:text-green-400 duration-200 ">
            {data.position}
          </p>
          <div className="text-gray-400 flex items-center">
            <span className="relative after:content-['•'] after:mx-[0.6rem]">
              {data.postedAt}
            </span>
            <span className="relative after:content-['•'] after:mx-[0.6rem]">
              {data.contract}
            </span>
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      <div className="block md:hidden my-4 w-full border-b-[0.1px] border-green-900/30" />

      <div className="flex w-full md:max-w-max flex-wrap gap-4">
        {[data.role, data.level, ...data.tools, ...data.languages].map(
          (item) => (
            <span
              key={item}
              className={
                " hover:bg-green-400  hover:text-green-50 duration-200 cursor-pointer font-bold rounded-md px-2 py-1 " +
                (filters.includes(item)
                  ? "bg-green-400 text-green-50"
                  : "bg-green-50 text-green-400 ")
              }
              onClick={() => itemClicked(item)}
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default JobCard;
