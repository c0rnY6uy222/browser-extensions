import React from "react";
import Card from "./card/Card";

const data = {
  logo: "/src/assets/images/logo-console-plus.svg",
  name: "DevLens",
  description: "Quickly inspect page layouts and visualize element boundaries.",
  isActive: true,
};

const Cards = () => {
  return (
    <main className="cards">
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
      <Card
        logo={data.logo}
        name={data.name}
        description={data.description}
        isActive={data.isActive}
      />
    </main>
  );
};

export default Cards;
