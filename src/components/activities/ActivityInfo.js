import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ActivityNotes } from "./ActivityNotes";
import { ActivityMessages } from "./ActivityMessages";
import { NoteForm } from "../notes/NoteForm";
import { MessageForm } from "../messages/MessageForm";
import { Navtabs } from "../ui/Tabs/Navtabs";
import { Paneltabs } from "../ui/Tabs/Paneltabs";
import { FloatingButton } from "../ui/FloatingButton/FloatingButton";
import { CustomModal } from "../ui/Modal/CustomModal";
import { ModalHeader } from "../ui/Modal/ModalHeader";
import { ModalBody } from "../ui/Modal/ModalBody";
import { hideSideModal, showSideModal } from "../../actions/uiActions";

export const ActivityInfo = () => {

	const dispatch = useDispatch();

	const { activeActivity } = useSelector(state => state.activities);
	const { openSideModal } = useSelector(state => state.ui);
	const { title, description } = activeActivity || {};
	
	const [tabNotesOpen, setTabNotesOpen] = useState(true); /** true */

	const onHideSideModal = () => {
		dispatch( hideSideModal() );
	};

	const onShowSideModal = () => {
		dispatch( showSideModal() );
	};

	const titleHeader = tabNotesOpen ? 'Nueva nota' : 'Nuevo comentario';

	const modalHeader = (
		<ModalHeader
			title={ titleHeader }
			textColor='white'
		/>
	);

	return (
		<div className="row">
			<div className="container-body-modal">
				<div className="child-div mh-20-vh square scrollbar-dusty-grass square thin">
					<div className="col-12">
						<h4>{ title }</h4>

						<p className="text-justify">
                            { description }
						</p>
					</div>
				</div>
				<div className="child-div h-45-vh square scrollbar-dusty-grass square thin mt-3 mb-3">
					<div className="col-12">
						<Navtabs
							tabNotesOpen={ tabNotesOpen }
							setTabNotesOpen={ setTabNotesOpen }
						/>

						<Paneltabs>
							
							<ActivityNotes
								show={ tabNotesOpen }
							/>
							<ActivityMessages
								show={ !tabNotesOpen }
							/>

						</Paneltabs>

						<FloatingButton
							variant='primary'
							icon={ tabNotesOpen ? 'fas fa-plus' : 'fas fa-comment-medical' }
							aditionalClass="fab-bottom-modal"
							onClick={ onShowSideModal }
						/>
                    </div>
				</div>
			</div>

			<CustomModal
				header={ modalHeader }
				openModal={ openSideModal }
				onHide={ onHideSideModal }
				variant='primary'
				styleModal='side'
				position='bottom-right'
			>
				<ModalBody>
					{
						tabNotesOpen
							? <NoteForm />
							: <MessageForm />
					}
				</ModalBody>
			</CustomModal>

		</div>
	);
};
