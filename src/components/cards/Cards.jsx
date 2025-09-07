import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "axios";

import "./cards.css";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/src/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <main className="cards">
      {data.map((card, key) => (
        <Card
          key={key}
          logo={card.logo}
          name={card.name}
          description={card.description}
          isActive={card.isActive}
        />
      ))}
    </main>
  );
};

export default Cards;
