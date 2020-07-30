import React from 'react'
import moment from "moment";
import 'moment/locale/es';

export const Message = ({ id, text, user, date }) => {
    const transformDate = moment( date ).startOf('hour').fromNow();

    const { 
        name, 
        img = 'https://www.lifestylesolutionsbyworldmark.com/img/global/icon-user.svg'
    } = user;

    // const onHandleEdit = () => {
    //     console.log('click');
    // }

    return (
        <li className="row ml-3">
            <div className="col-11">
                <div className="messages-container">
                    <div className="d-flex justify-content-md-between">
                        <div className="information d-flex justify-content-start">
                            <img
                                src={ img }
                                alt="avatar"
                                className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"
                            />
                            <div className="text-small">
                                <strong>{ name }</strong>
                                {/* {' '}
                                <div 
                                    className="badge badge-success text-wrap pointer cursor-pointer"
                                    onClick={ onHandleEdit }
                                >
                                    Editar
                                </div> */}
                                {/* {' '}
                                <div 
                                    className="badge badge-danger text-wrap pointer cursor-pointer"
                                >
                                    Eliminar
                                </div> */}
                                <p className="last-message text-muted">
                                    <em>Publicado { transformDate }</em>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-justify">
                        { text }
                    </p>
                </div>

                <hr/>
            </div>
		</li>
    )
}
