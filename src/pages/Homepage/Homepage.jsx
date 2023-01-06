import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import NavPanel from "../../components/NavPanel/NavPanel";
import "./Homepage.css";

const Homepage = () => {
	return (
		<div className="homepage">
			<div className="homepage--container">
				<NavPanel />
				<Dashboard />
			</div>
		</div>
	);
};

export default Homepage;
