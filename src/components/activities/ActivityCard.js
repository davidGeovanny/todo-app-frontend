import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { showModal, setModalIsForm, setModalIsInfo } from '../../actions/uiActions';
import { setActiveActivity } from '../../actions/activityActions';

import 'moment/locale/es';

export const ActivityCard = ({
	id,
    title, 
	description,
	notes = [],
	done,
	date,
}) => {
    const dispatch = useDispatch();
    
    const variant = done ? 'success' : 'danger';

    const onShowModalInfo = () => {
		dispatch( setActiveActivity( id ) );
        dispatch( showModal() );
        dispatch( setModalIsInfo() );
    };

    const onShowModalForm = () => {
		dispatch( setActiveActivity( id ) );
        dispatch( setModalIsForm() );
        dispatch( showModal() );
	};
	
	const dateActivity = moment( date ).format('LL');

	const countFinishedNotes = () => {
		let count = 0;

		for (let i = 0; i < notes.length; i++) {
			if( notes[i].done ) {
				count ++
			}
		}

		return count;
	};

	return (
		<Card className={`card border-${variant} mb-3 mt-3  activity-hover animate__animated animate__fadeInUp animate__faster`}>
			<div onClick={onShowModalInfo} className="cursor-pointer">
				<Card.Header className={`bg-transparent border-${variant}`}>
					<div className="justify-content-between">
						<div className="row">
							<div className="col-10">{title}</div>
							<div className="col-2 text-muted">
								{ countFinishedNotes() } / { notes.length }
							</div>
						</div>
					</div>
				</Card.Header>
				<Card.Body className="text-muted">
					<Card.Text className="card-row card-description">
						{description}
					</Card.Text>
				</Card.Body>
			</div>

			<Card.Footer className={`text-muted bg-transparent border-${variant}`}>
				<div className="row">
					<div className="col-6">
						<button
							className="btn btn-success btn-sm"
							onClick={onShowModalForm}
						>
							<i className="fas fa-edit"></i>
						</button>
					</div>
					
					<div className="col-6 ">
						<div className="row justify-content-end mr-1">
							<span>{ dateActivity }</span>
						</div>
					</div>
				</div>
			</Card.Footer>
		</Card>
	);
};
