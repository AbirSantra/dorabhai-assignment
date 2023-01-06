import React from "react";
import "./Header.css";
import logoIcon from "../../images/dblogo.png";
import logoText from "../../images/dblogo-text.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header--container">
				{/* Logo Icon */}
				<div className="header--logo--icon">
					<img src={logoIcon} alt="logo-icon" />
				</div>
				{/* Logo Text */}
				<div className="header--logo--text">
					<img src={logoText} alt="logo-text" />
				</div>
			</div>
		</div>
	);
};

export default Header;
