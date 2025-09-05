import React, { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState("All");

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <section className="filters">
      <h1>Extensions List</h1>

      <section className="filters-btn-group">
        <label>
          <input
            type="radio"
            id="btnAll"
            value="All"
            checked={selected === "All"}
            onChange={() => handleChange("All")}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            id="btnActive"
            value="Active"
            checked={selected === "Active"}
            onChange={() => handleChange("Active")}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            id="btnInactive"
            value="Inactive"
            checked={selected === "Inactive"}
            onChange={() => handleChange("Inactive")}
          />
          Inactive
        </label>
      </section>
    </section>
  );
};

export default Filters;
