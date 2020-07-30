import React from "react";

export const NoProject = () => {
	return (
		<div className="row justify-content-md-center">
			<div className="col-10">
				<div className="jumbotron text-center blue-grey lighten-5">
					<h2 className="card-title h2">No hay proyectos disponibles para mostrar</h2>

					<p className="indigo-text my-4 font-weight-bold">
						Todo esfuerzo empieza de algo pequeño.
						<br/>
						¿Por qué no empezar a crear un nuevo proyecto?
					</p>

					<div className="row d-flex justify-content-center">
						<div className="col-xl-7 pb-2">
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
								aliquid dolorem ea distinctio exercitationem delectus qui, quas
								eum architecto, amet quasi accusantium, fugit consequatur
								ducimus obcaecati numquam molestias hic itaque accusantium
								doloremque laudantium, totam rem aperiam.
							</p>
						</div>
					</div>

					<hr className="my-4 pb-2" />

					<button className="btn btn-lg btn-indigo btn-rounded">
						Crear proyecto ahora <i className="fas fa-tasks"></i>
					</button>
				</div>
			</div>
		</div>
	);
};
