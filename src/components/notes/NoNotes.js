import React from 'react'

export const NoNotes = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h3 className="text-center">
                    No hay notas en esta actividad
                </h3>
                <p className="text-center">
                    Haz clic en el botón <b>+</b> para agregar una nota
                </p>
            </div>
        </div>
    );
}
