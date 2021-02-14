import React from "react";

import "./menu.scss";

export default function Menu({ children }) {
	return (
		<div className="menu">
			<a href="/">Home</a><a href="table">Table</a><a href="page">Page</a>
		</div>
	);
}
