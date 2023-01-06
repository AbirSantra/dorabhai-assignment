import React from "react";
import "./LibraryCard.css";
import infoIcon from "../../images/info.png";

const LibraryCard = ({ title, type, theme }) => {
	return (
		<div className="librarycard" style={{ backgroundColor: theme }}>
			<div className="librarycard--container">
				<h2 className="librarycard--title">{title.toUpperCase()}</h2>
				<div className="librarycard--bottom">
					<div className="librarycard--type">{type.toUpperCase()}</div>
					<img src={infoIcon} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LibraryCard;
