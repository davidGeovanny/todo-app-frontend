import React from "react";
import { MessagesSection } from "../messages/MessagesSection";

export const ActivityMessages = ({ show }) => {
	return (
		<div className={`tab-pane fadeIn in ${show && "show active"}`}>
			<div className="row">
				<div className="col-12">
					<MessagesSection />
				</div>
			</div>
		</div>
	);
};
