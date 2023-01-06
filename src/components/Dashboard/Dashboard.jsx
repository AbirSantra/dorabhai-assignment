import React from "react";
import "./Dashboard.css";
import banner from "../../images/banner.png";
import CourseCard from "../CourseCard/CourseCard";
import calculasImg from "../../images/calculas.png";
import ringtheoryImg from "../../images/ringtheory.png";
import algebraImg from "../../images/algebra.png";
import LibraryCard from "../LibraryCard/LibraryCard";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboard--container">
				{/* Banner */}
				<div className="dashboard--banner">
					<img src={banner} alt="" />
				</div>
				{/* Courses List */}
				<div className="dashboard--courses">
					<div className="courses--header">
						<h1 className="courses--header--heading">Semester Courses</h1>
						<a className="courses--header--more" href="/">
							See All
						</a>
					</div>
					<div className="courses--cards">
						<CourseCard
							img={calculasImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={ringtheoryImg}
							title="Ring Theory and Linear Algebra"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={algebraImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={calculasImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={ringtheoryImg}
							title="Ring Theory and Linear Algebra"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={algebraImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={calculasImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={ringtheoryImg}
							title="Ring Theory and Linear Algebra"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={algebraImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={calculasImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={ringtheoryImg}
							title="Ring Theory and Linear Algebra"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={algebraImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={calculasImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={ringtheoryImg}
							title="Ring Theory and Linear Algebra"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
						<CourseCard
							img={algebraImg}
							title="Calculas"
							desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem nobis alias dolorum temporibus suscipit tempore recusandae ipsam quod placeat!"
						/>
					</div>
				</div>
				{/* Library */}
				<div className="dashboard--library">
					<div className="courses--header">
						<h1 className="courses--header--heading">Library</h1>
						<a className="courses--header--more" href="/">
							See All
						</a>
					</div>
					<div className="library--cards">
						<LibraryCard title="Mechanics" type="Core" theme="#FD4747" />
						<LibraryCard
							title="Mathematical Physics I"
							type="Core"
							theme="#FD8947"
						/>
						<LibraryCard
							title="RENEWABLE ENERGY AND ENERGY HARVESTING"
							type="aecc"
							theme="#AD47FD"
						/>
						<LibraryCard title="APPLIED OPTICS" type="aecc" theme="#D2116E" />
						<LibraryCard
							title="ELECTRICITY AND MAGNETISM"
							type="DSC"
							theme="#FDB447"
						/>
						<LibraryCard
							title="NUCLEAR AND PARTICLE PHYSICS"
							type="DSC"
							theme="#04AF72"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
