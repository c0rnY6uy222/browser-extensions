import React, { useState } from "react";

import "./filters.css";

const Filters = () => {
  const [selected, setSelected] = useState("All");

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <section className="filters">
      <h1>Extensions List</h1>

      <section className="filters-btn-group">
        <input
          type="radio"
          id="btnAll"
          checked={selected === "All"}
          onChange={() => handleChange("All")}
        />
        <label htmlFor="btnAll" className="filters-label">
          All
        </label>

        <input
          type="radio"
          id="btnActive"
          checked={selected === "Active"}
          onChange={() => handleChange("Active")}
        />
        <label htmlFor="btnActive" className="filters-label">
          Active
        </label>

        <input
          type="radio"
          id="btnInactive"
          checked={selected === "Inactive"}
          onChange={() => handleChange("Inactive")}
        />
        <label htmlFor="btnInactive" className="filters-label">
          Inactive
        </label>
      </section>
    </section>
  );
};

export default Filters;
