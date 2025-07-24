import removeIcon from "../assets/images/icon-remove.svg";
import filterStore from "../store/filterStore";

const FilterCard = ({ filters }) => {
  const { removeItem, reset } = filterStore();

  const handleRemove = (item) => {
    removeItem(item);
  };

  return (
    <div className="w-full  max-w-7xl grid mx-auto relative -top-[2rem]">
      <div className="text-green-400 font-bold tracking-wide flex items-center justify-between shadow-lg rounded-md bg-white  py-5 px-5 md:px-10 mx-6 md:mx-0 gap-1">
        <div className="flex gap-4 flex-wrap">
          {filters.map((filter) => (
            <div key={filter} className="flex">
              <span className="bg-green-50 text-green-400 rounded-l-[0.2rem] font-bold px-3 py-1">
                {filter}
              </span>
              <span
                onClick={() => handleRemove(filter)}
                className="bg-green-400 cursor-pointer hover:bg-green-900 transition-all duration-200 flex items-center justify-center rounded-r-[0.2rem] px-2"
              >
                <img src={removeIcon} alt="Remove" className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
        <div
          className="text-gray-400 hover:text-green-400 hover:underline cursor-pointer transition-all duration-200"
          onClick={() => reset()}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
