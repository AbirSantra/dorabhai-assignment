import React from "react";
import "./Navbar.css";
import homeIcon from "../../images/home icon.png";
import libraryIcon from "../../images/library icon.png";
import coursesIcon from "../../images/courses icon.png";
import accountIcon from "../../images/account icon.png";
import blogIcon from "../../images/blog icon.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar--container">
				<a href="/" className="navlink">
					<img src={homeIcon} alt="home icon" className="navlink--icon"></img>
				</a>
				<a href="/" className="navlink">
					<img
						src={libraryIcon}
						alt="home icon"
						className="navlink--icon"
					></img>
				</a>
				<a href="/" className="navlink">
					<img
						src={coursesIcon}
						alt="home icon"
						className="navlink--icon"
					></img>
				</a>
				<a href="/" className="navlink">
					<img
						src={accountIcon}
						alt="home icon"
						className="navlink--icon"
					></img>
				</a>
				<a href="/" className="navlink">
					<img src={blogIcon} alt="home icon" className="navlink--icon"></img>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
