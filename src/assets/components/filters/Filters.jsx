import "./filters.css";

const Filters = () => {
  return (
    <section className="filters">
      <h1>Extensions List</h1>

      <section className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Inactive</button>
      </section>
    </section>
  );
};

export default Filters;
