import React, { useState, Fragment } from "react";
import { Navtabs } from "./Navtabs";
import { Paneltabs } from "./Paneltabs";
import { FloatingButton } from "../FloatingButton/FloatingButton";

export const CustomTabs = () => {
	const [tabNotesOpen, setTabNotesOpen] = useState(true); /** true */

	return (
		<Fragment>
			<Navtabs tabNotesOpen={tabNotesOpen} setTabNotesOpen={setTabNotesOpen} />

			<Paneltabs>
				<div className={`tab-pane fadeIn in ${tabNotesOpen && "show active"}`}>
					<div className="row">
						<div className="col-12">Notas</div>
					</div>
				</div>

				<div className={`tab-pane fadeIn in ${!tabNotesOpen && "show active"}`}>
					<div className="row">
						<div className="col-12">Mensajes</div>
					</div>
				</div>
                <FloatingButton
                    variant='primary'
                    icon='fas fa-plus'
                    aditionalClass="fab-bottom-modal"
                    // onClick={ funcion }
                />
			</Paneltabs>
		</Fragment>
	);
};
