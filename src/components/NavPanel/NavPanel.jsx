import React from "react";
import "./NavPanel.css";
import userAvatar from "../../images/avatar.png";
import homeIcon from "../../images/home icon.png";
import libraryIcon from "../../images/library icon.png";
import coursesIcon from "../../images/courses icon.png";
import accountIcon from "../../images/account icon.png";
import blogIcon from "../../images/blog icon.png";
import playstore from "../../images/google-play-badge.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

const NavPanel = () => {
	return (
		<div className="navpanel">
			<div className="navpanel--container">
				{/* User Card */}
				<div className="navpanel--usercard">
					<p className="user--greeting">Good Morning Mithilesh</p>
					<div className="user--avatar">
						<img src={userAvatar} alt="user holding a cup of coffee" />
					</div>
				</div>
				{/* Nav Links */}
				<nav className="navpanel--navlinks">
					<a href="/" className="navlink">
						<img src={homeIcon} alt="" className="navlink--icon" />
						<p style={{ color: "#EA1C1C" }} className="navlink--text">
							Home
						</p>
					</a>
					<a href="/" className="navlink">
						<img src={libraryIcon} alt="" className="navlink--icon" />
						<p className="navlink--text">Library</p>
					</a>
					<a href="/" className="navlink">
						<img src={coursesIcon} alt="" className="navlink--icon" />
						<p className="navlink--text">My Courses</p>
					</a>
					<a href="/" className="navlink">
						<img src={accountIcon} alt="" className="navlink--icon" />
						<p className="navlink--text">Account</p>
					</a>
					<a href="/" className="navlink">
						<img src={blogIcon} alt="" className="navlink--icon" />
						<p className="navlink--text">Blog</p>
					</a>
				</nav>
				{/* Socials */}
				<div className="navpanel--socials">
					<p className="socials--heading">Follow us on</p>
					<div className="socials--icons">
						<a href="/" className="socials--icon">
							<img src={facebook} alt="" className="socials--icon" />
						</a>
						<a href="/" className="socials--icon">
							<img src={instagram} alt="" className="socials--icon" />
						</a>
						<a href="/" className="socials--icon">
							<img src={twitter} alt="" className="socials--icon" />
						</a>
						<a href="/" className="socials--icon">
							<img src={youtube} alt="" className="socials--icon" />
						</a>
					</div>
					<div className="socials--download">
						<img src={playstore} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavPanel;
