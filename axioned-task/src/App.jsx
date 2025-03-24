import React, { useState } from "react";
import DataFetcher from "./components/DataFetcher";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.body.toLowerCase().includes(searchTerm)
  );

  const paginatedData = searchTerm
    ? filteredData
    : sortedData.length > 0
    ? sortedData.slice(startIndex, endIndex)
    : data.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold font-mono">Blog Page</h1>

      <div className="flex justify-center items-center gap-5 py-5 sm:flex-row flex-col">
        <SearchBar
          data={data}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <FilterDropdown data={data} setSortedData={setSortedData} />
      </div>

      <DataFetcher setData={setData} setLoading={setLoading} />

      {loading ? (
        <div>
          <img src="../src/assets/loading.gif" alt="loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-5 my-4">
          {paginatedData.map((item) => (
            <div key={item.id}>
              <h2 className="text-2xl font-semibold">
                {item.id}. {item.title}
              </h2>
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
