import React, { useEffect, useState } from 'react';
import moment from "moment";
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { Activities } from './Activities';
import { ActivityInfo } from './ActivityInfo';
import { ActivityForm } from './ActivityForm';
import { NoActivities } from './NoActivities';
import { ProjectInfo } from '../projects/ProjectInfo';
import { NoProjectFound } from '../projects/NoProjectFound';
import { CustomModal } from '../ui/Modal/CustomModal';
import { ModalHeader } from '../ui/Modal/ModalHeader';
import { ModalBody } from '../ui/Modal/ModalBody';
import { Loading } from '../ui/Loading/Loading';
import { FloatingButton } from '../ui/FloatingButton/FloatingButton';

import { 
    startLoadActivities, 
    startDeleteActivity, 
    clearActiveActivity 
} from '../../actions/activityActions';
import { 
    showModal, 
    hideModal, 
    showConfirmModal, 
    hideConfirmModal, 
    setModalIsForm 
} from '../../actions/uiActions';

import 'moment/locale/es';

export const ActivityScreen = () => {

    const dispatch = useDispatch();

    const idProject = useLocation().pathname.split('/')[2];

    const { activities, loading, activeActivity } = useSelector(state => state.activities);
    const { activeProject, loading: projectLoading } = useSelector(state => state.projects);
    const { openModal, openConfirmModal, isForm } = useSelector(state => state.ui);

    const [infoProject, setInfoProject] = useState( false );

    const startDateActivity = moment( activeActivity?.created_at ).format('LL');
    const endDateActivity = moment( activeActivity?.updated_at ).format('LL');

    const onHideModal = () => {
        dispatch( hideModal() );

        if( infoProject ) {
            setInfoProject( false );
        } else {
            dispatch( clearActiveActivity() );
        }
    }

    const onShowConfirmModal = () => {
        dispatch( showConfirmModal() );
    };

    const onHideConfirmModal = () => {
        dispatch( hideConfirmModal() );
    }

    const onDeleteActivity = () => {
        dispatch( startDeleteActivity() );
    };

    const onClickFormActivity = () => {
        dispatch( setModalIsForm() );
        dispatch( showModal() );
    }

    const onShowInfoProject = () => {
        setInfoProject( true );
        dispatch( showModal() );
    }

    const sectionActivityHeader = (
        <div className="row justify-content-around text-black-50 text-center">
            <div className="col-5">
                <div className="row justify-content-start">
                    Fecha de inicio: { startDateActivity }
                </div>
            </div>
            <div className="col-5">
                <div className="row justify-content-start">
                    Última actualización: { endDateActivity }
                </div>
            </div>
            <div className="col-2">
                <div className="row justify-content-end">
                    <button
                        onClick={ onShowConfirmModal }
                        className="btn btn-danger btn-block ml-1"
                        style={{ zIndex: '999' }}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
    
    const sectionModalBody = () => {
        if( infoProject ) {
            return <ProjectInfo />
        } else if( isForm ) {
            return <ActivityForm />
        } else {
            return <ActivityInfo />
        }
    };

    const titleActivityHeader = () => {
        if( infoProject ) {
            return 'Información de proyecto';
        } else if( !!activeActivity ) {
            return `Actividad: ${ activeActivity.title }`;
        } else {
            return 'Agregar nueva actividad';
        }
    };

    useEffect(() => {
        /** Cargar las actividades */
        if( !projectLoading ) {
            dispatch( startLoadActivities( idProject ) );
        }
    }, [ dispatch, idProject, projectLoading ]);

    useEffect(() => {
        return () => {
            dispatch( hideModal() );
        }
    }, [ dispatch ])

    if( loading ) {
        return <div className="container-fluid pb-3 pt-3 pl-3 pr-3">
            <div className="col-12 text-center mt-5">
                <Loading />
            </div>
        </div>
    } else if( !activeProject ) {
        return <NoProjectFound />
    }

    return (
		<div className="container-fluid pb-3 pt-3 pl-3 pr-3 animate__animated animate__fadeIn animate__faster">
            <div className="row justify-content-between ml-1 mr-1 mt-2 mb-2">
                <OverlayTrigger
                    placement="right"
                    // delay={{ show: 200, hide: 200 }}
                    overlay={ <Tooltip>Información del proyecto</Tooltip> }
                >
                    <button
                        className="btn btn-warning btn-info"
                        onClick={ onShowInfoProject }
                    >
                        <i className="fas fa-info"></i>
                    </button>
                </OverlayTrigger>
                
                <Link 
                    className="btn btn-indigo"
                    to="/"
                    style={{zIndex: '999'}}
                >
                    <i className="fas fa-arrow-left"></i>{' '}Regresar
                </Link>
                
            </div>

            {
                ( activities.length <= 0 )
                    ? <NoActivities />
                    : <Activities />
            }

            <FloatingButton
                variant='primary'
                icon='fas fa-plus'
                onClick={ onClickFormActivity }
            />

            <CustomModal
                openModal={ openModal }
                onHide={ onHideModal }
                variant={ ( !!activeActivity && isForm ) ? 'success' : 'primary' }
                styleModal='fluid'
                header={ <ModalHeader title={ titleActivityHeader() } /> }
            >
                <ModalBody>
                    { 
                        ( !!activeActivity && !infoProject )
                            && sectionActivityHeader
                    }
                    <hr/>
                    { sectionModalBody() }
                </ModalBody>
            </CustomModal>

            <CustomModal
                openModal={ openConfirmModal }
                onHide={ onHideConfirmModal }
                variant='danger'
				styleModal='side'
				position='top-right'
                header={ <ModalHeader title={ 'Eliminar actividad' } /> }
            >
                <ModalBody>
                    <div className="row">
                        <p className="text-center">
                            <b>¿Estás seguro que deseas eliminar la actividad? Esta acción no se podrá deshacer</b>
                        </p>
                        <div className="col-6">
                            <button
                                className="btn btn-secondary btn-sm btn-block"
                                onClick={ onHideConfirmModal }
                            >
                                Cancelar
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                onClick={ onDeleteActivity }
                                className="btn btn-success btn-sm btn-block"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                </ModalBody>
            </CustomModal>
		</div>
	);
}
