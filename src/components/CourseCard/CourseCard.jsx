import React from "react";
import "./CourseCard.css";
import videoIcon from "../../images/video-icon.png";
import notesIcon from "../../images/notes-icon.png";
import educatorIcon from "../../images/educator-icon.png";

const CourseCard = ({ img, title, desc }) => {
	return (
		<div className="coursecard">
			<div className="coursecard--container">
				<div className="coursecard--content">
					<div className="coursecard--content--img">
						<img src={img} alt="title" />
					</div>
					<div className="coursecard--content--text">
						<h2>{title}</h2>
						<p>
							Also know as: {desc.substr(1, 50)} ...<span>see more</span>
						</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="coursecard--stats">
					<div className="coursecard--stat">
						<img src={videoIcon} alt="videoicon" className="stat--icon" />
						<p className="stat--text">Videos (112)</p>
					</div>
					<div className="coursecard--stat">
						<img src={notesIcon} alt="videoicon" className="stat--icon" />
						<p className="stat--text">Notes (115)</p>
					</div>
					<div className="coursecard--stat">
						<img src={educatorIcon} alt="videoicon" className="stat--icon" />
						<p className="stat--text">Educator (2)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
