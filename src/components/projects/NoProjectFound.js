import React from 'react'
import { Link } from 'react-router-dom'

export const NoProjectFound = () => {
    return (
        <div className="container-fluid pb-3 pt-3 pl-3 pr-3">
            <div className="col-12 text-center mt-5">
                <h1>No existe el proyecto seleccionado</h1>
                <Link 
                    className="btn btn-indigo"
                    to="/"
                    style={{zIndex: '999'}}
                >
                    <i className="fas fa-arrow-left"></i>{' '}Regresar
                </Link>
            </div>
        </div>
    )
}
