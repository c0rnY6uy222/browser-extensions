import { useEffect, useState } from "react";
import { Nav, Filters, Card } from "./assets/components/components";

const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      <Filters />

      <section className="cards">
        {data.map((card, key) => (
          <Card
            key={key}
            name={card.name}
            description={card.description}
            logo={card.logo}
            isActive={card.isActive}
          />
        ))}
      </section>
    </>
  );
};

export default App;
