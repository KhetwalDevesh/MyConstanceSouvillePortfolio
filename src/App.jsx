import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projectDetails" element={<ProjectDetails />} />
			</Routes>
		</div>
	);
};

export default App;
