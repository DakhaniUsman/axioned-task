import React, { useState } from "react";

const FilterDropdown = ({ data, setSortedData }) => {
  const [sortType, setSortType] = useState("default");

  const handleSort = (e) => {
    const type = e.target.value;
    setSortType(type);

    let sortedData = [...data];

    if (type === "A-Z") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "Z-A") {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (type === "ID Asc") {
      sortedData.sort((a, b) => a.id - b.id);
    } else if (type === "ID Desc") {
      sortedData.sort((a, b) => b.id - a.id);
    }

    setSortedData(sortedData); // ✅ Properly setting sorted data
  };

  return (
    <div >
      <label className="mr-2 font-semibold">Sort By:</label>
      <select value={sortType} onChange={handleSort} className="border px-4 py-2 rounded-md">
        <option value="default">Default</option>
        <option value="A-Z">Title: A-Z</option>
        <option value="Z-A">Title: Z-A</option>
        <option value="ID Asc">ID Ascending</option>
        <option value="ID Desc">ID Descending</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
