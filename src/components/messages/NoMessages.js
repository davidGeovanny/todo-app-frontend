import React from 'react'

export const NoMessages = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h3 className="text-center">
                    Nadie ha dejado un comentario en la actividad
                </h3>
                <p className="text-center">
                    Haz clic en el botón <b><i className="fas fa-comment-medical"></i></b> y sé el primero en dejar un comentario
                </p>
            </div>
        </div>
    );
}
