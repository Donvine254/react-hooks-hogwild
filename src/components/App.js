import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("All");

  let hogsToDisplay = hogs.filter((hog) => {
    if (selectedCategory === "All") {
      return true;
    } else if (selectedCategory === "greased") {
      return hog.greased === true;
    } else if (selectedCategory === "not-greased") {
      return hog.greased === false;
    }
  });
  if (selectedSort === "Name") {
    hogsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "Weight") {
    hogsToDisplay.sort((a, b) => b.weight - a.weight);
  }

  return (
    <div className="App">
      <Nav />
      <Filter
        category={selectedCategory}
        onFilterChange={setSelectedCategory}
        filter={selectedSort}
        onSortChange={setSelectedSort}
      />
      <Tile hogs={hogsToDisplay} />
    </div>
  );
}

export default App;
