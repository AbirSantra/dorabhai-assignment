import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer--container">
				<p className="footer--text">
					{new Date().getFullYear()} Copyrights. &copy; <span>dorabhai</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
