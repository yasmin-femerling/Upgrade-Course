import PropTypes from 'prop-types';
import React from 'react';

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

/* tarea prueba
mostrar componente correctamente
    * shallow
    *wrapper
    * wrapper .tomatchsnapshot()
*/


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};