import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tile from "./Tile";

function App() {
	return (
		<div className="App">
			<Nav />
			<Tile hogs={hogs}/>
		</div>
	);
}

export default App;
