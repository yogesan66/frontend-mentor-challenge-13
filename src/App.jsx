import { useEffect, useState } from "react";
import "./App.css";
import FilterCard from "./components/FilterCard";
import JobCard from "./components/jobCard";
import mockJobList from "./mock-data/data";
import filterStore from "./store/filterStore";
import Footer from "./components/Footer";

function App() {
  const { filters } = filterStore();
  const [filteredList, setFilteredList] = useState(mockJobList);

  useEffect(() => {
    applyFilter(filters);
  }, [filters]);

  const applyFilter = (filters) => {
    if (filters.length === 0) return setFilteredList(mockJobList);
    const filtered = mockJobList.filter((i) => {
      const allTags = [i.role, i.level, ...i.languages, ...i.tools];
      return filters.every((f) => allTags.includes(f));
    });
    setFilteredList(filtered);
  };

  return (
    <div className="relative select-none bg-green-50 overflow-y-auto w-screen h-screen font-league text-[15px] font-medium">
      <header className="h-28 bg-[center_-40px] bg-green-400 bg-[url(./assets/images/bg-header-desktop.svg)] bg-no-repeat bg-cover bg-blend-multiply"></header>
      {filters.length > 0 && <FilterCard filters={filters} />}
      <main
        className={
          "mb-12 p-6 md:p-0  w-full gap-12 md:gap-6 flex flex-col items-center " +
          (filters.length > 0 ? "" : "mt-[4.4rem]")
        }
      >
        {filteredList.map((item) => (
          <JobCard key={item.id} data={item} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
