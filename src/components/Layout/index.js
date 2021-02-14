import React from "react";

import "./layout.scss";

import Header from "../Header";
import Menu from "../Menu";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Header />
			<Menu />
			<div className="content-area">
				{children}
			</div>
		</div>
	);
}
