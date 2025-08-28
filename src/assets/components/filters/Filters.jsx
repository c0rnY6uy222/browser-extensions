import "./filters.css";

const Filters = () => {
  return (
    <section className="filters">
      <p>Extension List</p>

      <section className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Inactive</button>
      </section>
    </section>
  );
};

export default Filters;
