import React, { useEffect, useState } from "react";

import Card from "./card/Card";
import Filters from "./filters/Filters";

import "./cards.css";

import Data from "/data.json?url";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(Data)
      .then((response) => {
        response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <main className="cards">
      <Filters />

      {data.map((card, key) => (
        <Card
          key={key}
          logo={card.logo}
          name={card.name}
          description={card.description}
          num={key}
          isActive={card.isActive}
        />
      ))}
    </main>
  );
};

export default Cards;
