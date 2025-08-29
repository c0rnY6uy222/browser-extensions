import React from "react";
import { Nav, Filters, Card } from "./assets/components/components";

const App = () => {
  return (
    <>
      <Nav />
      <Filters />

      <section className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default App;
