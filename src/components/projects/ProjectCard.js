import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ id, area, title, description }) => {

	return (
		<div
			className="card card-image"
			style={{
				backgroundImage:
					"url(https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg)",
			}}
		>
			<div className="justify-content-center d-flex rgba-black-strong py-5 px-4 animate__animated animate__fadeIn animate__faster">
				<div className="text-white text-center">
					<h5 className="pink-text">
						<i className="fas fa-chart-pie"></i> { area }
					</h5>
					<h3 className="card-title pt-2">
						<strong>{ title }</strong>
					</h3>
					<p className="card-description">{ description }</p>
					<Link 
						className="btn btn-pink"
						to={`./projects/${ id }/activities`}
					>
						<i className="far fa-clone left"></i> Ver proyecto
					</Link>
				</div>
			</div>
		</div>
	);
};
